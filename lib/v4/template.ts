/**
 * v4 数据集的句子由引擎拼接而成，换掉星名、宫名等专名后只剩约 1 万个句型。
 * 句型只翻译一次，运行时把专名按越南语填回：{S1} 星、{P1} 宫、{H1} 四化、{B1} 亮度、{G1} 地支宫、{J1} 五行局、{N1} 数字。
 */
import { viBranch, viJu, viPalace, viStar, TERMS } from '@/lib/i18n/vi';

// 不含「天才、破碎、天使、天空、空亡」等同时是普通词的星名，它们留在句型里由译者按语境处理
const STARS = [
  '紫微', '天机', '太阳', '武曲', '天同', '廉贞', '天府', '太阴', '贪狼', '巨门', '天相', '天梁', '七杀', '破军',
  '左辅', '右弼', '文昌', '文曲', '禄存', '天马', '擎羊', '陀罗', '火星', '铃星', '地空', '地劫', '天魁', '天钺',
  '红鸾', '天喜', '天姚', '天刑', '截空', '旬空', '副截', '副旬', '三台', '八座', '恩光', '天贵', '龙池', '凤阁',
  '台辅', '封诰', '孤辰', '寡宿', '华盖', '咸池', '解神', '天巫', '天哭', '天虚', '大耗', '蜚廉', '天月', '阴煞',
  '天官', '天福', '天寿', '天伤', '截路', '天厨', '月德', '年解', '天德', '劫煞',
];
const PALACES = ['命宫', '身宫', '兄弟宫', '夫妻宫', '子女宫', '财帛宫', '疾厄宫', '迁移宫', '交友宫', '仆役宫', '官禄宫', '田宅宫', '福德宫', '父母宫'];
const HUA = ['化禄', '化权', '化科', '化忌'];
const BRIGHT: Record<string, string> = { '庙旺': 'Miếu Vượng', '落陷': 'Hãm Địa', '入庙': 'nhập Miếu', '平和': 'Bình Hòa' };
const JU = ['水二局', '木三局', '金四局', '土五局', '火六局'];
// 「子宫」也是普通词（健康主题会出现），不做占位
const BRANCH_PALACES = '丑寅卯辰巳午未申酉戌亥'.split('').map(b => `${b}宫`);

const KIND = new Map<string, string>();
for (const w of STARS) KIND.set(w, 'S');
for (const w of PALACES) KIND.set(w, 'P');
for (const w of HUA) KIND.set(w, 'H');
for (const w of Object.keys(BRIGHT)) KIND.set(w, 'B');
for (const w of JU) KIND.set(w, 'J');
for (const w of BRANCH_PALACES) KIND.set(w, 'G');
const TOKEN = new RegExp(`${[...KIND.keys()].sort((a, b) => b.length - a.length).join('|')}|\\d+(?:\\.\\d+)?`, 'g');

export interface SentenceTemplate {
  template: string;
  /** 占位符 → 原文专名，如 { S1: '紫微', N1: '6' } */
  values: Record<string, string>;
}

export function toTemplate(sentence: string): SentenceTemplate {
  const counts: Record<string, number> = {};
  const values: Record<string, string> = {};
  const template = sentence.replace(TOKEN, word => {
    const kind = KIND.get(word) ?? 'N';
    counts[kind] = (counts[kind] ?? 0) + 1;
    const key = `${kind}${counts[kind]}`;
    values[key] = word;
    return `{${key}}`;
  });
  return { template, values };
}

function renderValue(key: string, word: string): string {
  switch (key[0]) {
    case 'S': return viStar(word);
    case 'P': return `cung ${viPalace(word)}`;
    case 'H': return TERMS[word] ?? word;
    case 'B': return BRIGHT[word] ?? word;
    case 'G': return `cung ${viBranch(word[0])}`;
    case 'J': return viJu(word);
    default: return word;
  }
}

/** 把译好的句型填回专名 */
export function renderTemplate(viTemplate: string, values: Record<string, string>): string {
  return viTemplate.replace(/\{([SPHBGJN]\d+)\}/g, (all, key: string) =>
    values[key] === undefined ? all : renderValue(key, values[key]));
}

/** 校验译文：占位符一个不多不少、不残留汉字、粗体标记成对。返回问题说明，合格返回 null */
export function checkTemplateTranslation(template: string, vi: string): string | null {
  const keys = (s: string) => (s.match(/\{[SPHBGJN]\d+\}/g) ?? []).sort().join(' ');
  if (keys(template) !== keys(vi)) return `placeholders differ: [${keys(template)}] vs [${keys(vi)}]`;
  if (/[一-鿿]/.test(vi)) return 'contains Chinese';
  if ((template.match(/\*\*/g) ?? []).length !== (vi.match(/\*\*/g) ?? []).length) return 'bold markers differ';
  return null;
}

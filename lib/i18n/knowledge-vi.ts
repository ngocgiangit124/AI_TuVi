/**
 * 知识库显示层：db-analysis.ts 的 TOPIC_LABEL 保留中文，这里提供越南语标签。
 * 宫位名用 vi.ts 的 viPalace 转换 TOPIC_PALACE_NAME。
 */
import type { TopicKey } from '@/lib/ziwei/db-analysis';

export const TOPIC_LABEL_VI: Record<TopicKey, string> = {
  overview:    'Tổng quan mệnh cách',
  personality: 'Đặc điểm tính cách',
  love:        'Tình cảm hôn nhân',
  career:      'Sự nghiệp, nghề nghiệp',
  wealth:      'Vận thế tài lộc',
  health:      'Tình trạng sức khỏe',
  family:      'Anh em, hợp tác',
  children:    'Duyên con cái',
  move:        'Thiên di, đi xa',
  friends:     'Quan hệ xã hội, quý nhân',
  home:        'Điền trạch, bất động sản',
  spirit:      'Tinh thần, phúc đức',
  parents:     'Cha mẹ, bề trên',
};

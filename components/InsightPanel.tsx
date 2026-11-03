'use client';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { ZiweiChart, Palace } from '@/lib/ziwei/types';
import type { TimeView } from './TimeNav';
import { viPalace, viSiHua, viStar } from '@/lib/i18n/vi';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  hidden?: boolean; // don't show user bubble for auto/topic messages
}

interface SelectedSiHua {
  starName: string;
  siHua: string;
  view: TimeView;
}

interface InsightPanelProps {
  chart: ZiweiChart;
  selectedPalace?: Palace | null;
  selectedSiHua?: SelectedSiHua | null;
}

const TOPICS = [
  { key: 'overview',     label: 'Mệnh cách' },
  { key: 'love',        label: 'Tình cảm' },
  { key: 'career',      label: 'Sự nghiệp' },
  { key: 'wealth',      label: 'Tài vận' },
  { key: 'health',      label: 'Sức khỏe' },
  { key: 'personality', label: 'Tính cách' },
] as const;

const TOPIC_PROMPTS: Record<string, string> = {
  overview: `Hãy tạo bản tổng quan mệnh cách, trình bày theo cấu trúc sau:

**【Định tính mệnh cách】**
Dùng một câu khái quát Cách Cục cốt lõi của lá số này và khí chất của Mệnh Chủ.

**【Luận giải Chính Tinh】**
Đặc chất cốt lõi của Chính Tinh cung Mệnh, trích dẫn nguyên lời hoặc quan điểm của Nghê Hải Hạ.

**【Tam Phương Tứ Chính】**
Phân tích sự liên động của ba cung Tài Bạch, Quan Lộc, Thiên Di và Cách Cục tổng thể.

**【Đại Hạn hiện tại】**
Hướng vận thế của Đại Hạn hiện tại và những việc đáng chú ý nhất.

**【Ưu thế và lưu ý】**
Ưu thế thiên phú của lá số, cùng những rủi ro hoặc bài học cần lưu ý.`,

  love: `Hãy phân tích sâu vận tình cảm, hôn nhân, trình bày theo cấu trúc sau:

**【Cách Cục tình cảm】**
Dùng một câu định tính mệnh cách về tình cảm.

**【Phân tích cung Phu Thê】**
Chính Tinh, Tứ Hóa của cung Phu Thê, cùng luận giải cụ thể theo hệ thống Nghê Hải Hạ.

**【Liên động Tam Phương】**
Ảnh hưởng của các cung vị liên quan đến tình cảm.

**【Vận tình cảm Đại Hạn hiện tại】**
Hướng đi tình cảm trong 10 năm hiện tại và các mốc then chốt.

**【Lời khuyên thực tế】**
Lời khuyên tình cảm cụ thể, khả thi.`,

  career: `Hãy phân tích sâu vận sự nghiệp, trình bày theo cấu trúc sau:

**【Cách Cục sự nghiệp】**
Dùng một câu định tính mệnh cách về sự nghiệp, nên đi làm hay nên khởi nghiệp.

**【Phân tích cung Quan Lộc】**
Chính Tinh, Tứ Hóa của cung Quan Lộc, cùng nhận định của Thầy Nghê về cấu hình này.

**【Liên động cung Tài Bạch】**
Quan hệ giữa tài vận và sự nghiệp, phân tích nguồn tài.

**【Vận sự nghiệp Đại Hạn hiện tại】**
Hướng đi sự nghiệp trong 10 năm hiện tại.

**【Lời khuyên thực tế】**
Hướng đi, ngành nghề và chiến lược phù hợp.`,

  wealth: `Hãy phân tích sâu tài vận, trình bày theo cấu trúc sau:

**【Cách Cục tài vận】**
Dùng một câu định tính mô hình tài vận, là tài chủ động hay tài thụ động.

**【Phân tích cung Tài Bạch】**
Chính Tinh, Tứ Hóa của cung Tài Bạch, nguồn gốc của cải và mô hình lưu chuyển.

**【Cung Điền Trạch (tài khố)】**
Phân tích khả năng tích lũy và vận bất động sản.

**【Tài vận Đại Hạn hiện tại】**
Hướng đi tài vận hiện tại và những điều cần chú ý.

**【Lời khuyên quản lý tài chính】**
Lời khuyên tài chính cụ thể.`,

  health: `Hãy phân tích vận sức khỏe, trình bày theo cấu trúc sau:

**【Chính Tinh cung Tật Ách】**
Các sao của cung Tật Ách và ý nghĩa về sức khỏe.

**【Rủi ro chính】**
Kết hợp lý thuyết Tý Ngọ Lưu Chú của Nghê Hải Hạ, phân tích các nguy cơ sức khỏe chính và những bộ phận cần chú ý.

**【Xu hướng sức khỏe theo Đại Hạn】**
Xu hướng sức khỏe hiện tại và các giai đoạn then chốt.

**【Lời khuyên phòng ngừa】**
Những điều cần chú ý cụ thể và hướng dưỡng sinh.`,

  personality: `Hãy phân tích sâu đặc điểm tính cách, trình bày theo cấu trúc sau:

**【Tính cách theo Chính Tinh cung Mệnh】**
Đặc điểm tính cách cốt lõi của Chính Tinh cung Mệnh, trích dẫn nguyên lời của Thầy Nghê.

**【Tổng hợp tính cách Tam Phương】**
Ảnh hưởng của ba cung Tài Bạch, Quan Lộc, Thiên Di đến tính cách, khắc họa toàn cảnh.

**【Mô hình quan hệ giao tiếp】**
Cách tương tác với người khác, phong cách đối nhân xử thế.

**【Ưu thế và bài học cuộc đời】**
Ưu thế thiên phú, cùng những bài học cuộc đời cần đối mặt.`,
};

const PALACE_ROLES: Record<string, string> = {
  '命宫':   'bản thân, tính cách, Cách Cục tiên thiên',
  '兄弟宫': 'quan hệ anh em, người hợp tác',
  '夫妻宫': 'quan hệ tình cảm, tình trạng hôn nhân',
  '子女宫': 'duyên con cái, quan hệ với cấp dưới',
  '财帛宫': 'nguồn tài vận, cách thức thu nhập',
  '疾厄宫': 'sức khỏe thân thể, tai nạn bất ngờ',
  '迁移宫': 'cơ hội khi ra ngoài, cục diện giao tiếp',
  '交友宫': 'vòng bạn bè, quý nhân, tiểu nhân',
  '官禄宫': 'thành tựu sự nghiệp, địa vị xã hội',
  '田宅宫': 'bất động sản, môi trường gia đình',
  '福德宫': 'hưởng thụ tinh thần, phúc phần nội tâm',
  '父母宫': 'quan hệ với cha mẹ, văn thư khế ước',
};

/** Render AI markdown: **【Title】** → gold header, **bold** → strong */
function AiContent({ text, streaming }: { text: string; streaming?: boolean }) {
  const lines = text.split('\n');
  return (
    <div className="space-y-0.5">
      {lines.map((line, i) => {
        const sectionMatch = line.match(/^\*\*【(.+?)】\*\*$/);
        if (sectionMatch) {
          return (
            <div key={i} className="pt-3 pb-0.5 first:pt-0">
              <span className="text-[11px] font-semibold tracking-wide" style={{ color: 'var(--t-gold)' }}>
                {sectionMatch[1]}
              </span>
            </div>
          );
        }
        if (line.trim() === '') return <div key={i} className="h-1" />;
        const parts = line.split(/\*\*(.+?)\*\*/);
        return (
          <div key={i} className="text-[11px] leading-relaxed" style={{ color: 'var(--t-text2)' }}>
            {parts.map((part, j) =>
              j % 2 === 0
                ? part
                : <strong key={j} className="font-medium" style={{ color: 'var(--t-text)' }}>{part}</strong>
            )}
          </div>
        );
      })}
      {streaming && (
        <span
          className="inline-block w-1.5 h-3 ml-0.5 animate-pulse rounded-sm align-middle"
          style={{ background: 'var(--t-gold)', opacity: 0.6 }}
        />
      )}
    </div>
  );
}

export default function InsightPanel({ chart, selectedPalace, selectedSiHua }: InsightPanelProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [activeTopic, setActiveTopic] = useState<string>('overview');
  const messagesRef = useRef<Message[]>([]); // always-current copy for closures
  const loadingRef = useRef(false);
  const autoLoaded = useRef(false);
  const lastPalaceBranch = useRef<number | undefined>(undefined);
  const lastSiHuaKey = useRef<string | undefined>(undefined);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Keep refs in sync
  useEffect(() => { messagesRef.current = messages; }, [messages]);
  useEffect(() => { loadingRef.current = loading; }, [loading]);

  // Auto-scroll
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  // Auto-generate 命格总览 on mount
  useEffect(() => {
    if (autoLoaded.current) return;
    autoLoaded.current = true;
    sendMessage(TOPIC_PROMPTS.overview, true);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Inject palace analysis when palace selected
  useEffect(() => {
    if (!selectedPalace || selectedPalace.branch === lastPalaceBranch.current) return;
    lastPalaceBranch.current = selectedPalace.branch;

    const majorStars = selectedPalace.stars.filter(s => s.type === 'major');
    const starDesc = majorStars.length > 0
      ? majorStars.map(s => `${viStar(s.name)}${s.siHua ? ' Hóa ' + viSiHua(s.siHua) : ''}`).join(', ')
      : 'Vô Chính Diệu (mượn đối cung)';
    const role = PALACE_ROLES[selectedPalace.name] ?? '';
    const palaceVi = viPalace(selectedPalace.name);

    const prompt = `Hãy phân tích trọng tâm cung ${palaceVi} (chủ quản: ${role}), Chính Tinh của cung này là ${starDesc}, trình bày theo cấu trúc sau:

**【Định tính cung vị】**
Ý nghĩa của cung ${palaceVi} trong lá số, và nhận định tổng thể về cấu hình sao này.

**【Luận giải Chính Tinh】**
Luận giải Chính Tinh ở cung này theo hệ thống Nghê Hải Hạ, trích dẫn quan điểm cụ thể.

**【Liên động Tam Phương Tứ Chính】**
Ảnh hưởng của các cung vị Tam Phương Tứ Chính đến cung này.

**【Lời khuyên thực tế】**
Lời khuyên cụ thể dựa trên cung này.`;

    sendMessage(prompt, true);
  }, [selectedPalace]); // eslint-disable-line react-hooks/exhaustive-deps

  // 注入四化飞化分析
  useEffect(() => {
    if (!selectedSiHua) return;
    const key = `${selectedSiHua.starName}-${selectedSiHua.siHua}-${selectedSiHua.view}`;
    if (key === lastSiHuaKey.current) return;
    lastSiHuaKey.current = key;

    // 找出该星所在宫位
    const palaceOfStar = chart.palaces.find(p =>
      p.stars.some(s => s.name === selectedSiHua.starName)
    );
    const palaceName = palaceOfStar ? `cung ${viPalace(palaceOfStar.name)}` : 'cung vị không rõ';
    const viewLabel = selectedSiHua.view === 'daxian' ? 'Đại Hạn' : 'Lưu Niên';
    const starVi = viStar(selectedSiHua.starName);
    const huaVi = `Hóa ${viSiHua(selectedSiHua.siHua)}`;

    const prompt = `Hãy phân tích ảnh hưởng phi hóa của ${starVi} ${huaVi} (${viewLabel}), trình bày theo cấu trúc sau:

**【Ý nghĩa cơ bản của ${huaVi}】**
Ý nghĩa cốt lõi của ${huaVi} trong hệ thống Nghê Hải Hạ, và ý nghĩa đặc biệt của ${starVi} ${huaVi}.

**【Ảnh hưởng của cung lạc vào】**
${starVi} ${huaVi} rơi vào ${palaceName}, lĩnh vực do cung này chủ quản chịu ảnh hưởng thế nào, Thầy Nghê luận giải ra sao.

**【Đường phi hóa Tam Phương Tứ Chính】**
Sau khi ${huaVi} nhập ${palaceName}, ảnh hưởng liên động đến Tam Phương Tứ Chính của cung đó (đối cung, hai cung tam hợp).

**【Ảnh hưởng đến vận thế hiện tại】**
Trong khung thời gian ${viewLabel}, ảnh hưởng cụ thể của ${huaVi} này đến vận thế gần đây của Mệnh Chủ.

**【Lời khuyên thực tế】**
Lời khuyên cụ thể, khả thi dựa trên Tứ Hóa này.`;

    sendMessage(prompt, true);
  }, [selectedSiHua]); // eslint-disable-line react-hooks/exhaustive-deps

  const streamResponse = async (apiMessages: { role: 'user' | 'assistant'; content: string }[]) => {
    try {
      const res = await fetch('/api/interpret', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chart, messages: apiMessages }),
      });
      if (res.status === 404) throw new Error('api-missing');
      if (!res.ok) throw new Error('Yêu cầu thất bại');
      if (!res.body) throw new Error('Không có luồng phản hồi');

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let assistantText = '';

      setMessages(prev => [...prev, { role: 'assistant', content: '' }]);

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });
        for (const line of chunk.split('\n')) {
          if (!line.startsWith('data: ')) continue;
          const data = line.slice(6);
          if (data === '[DONE]') break;
          try {
            const delta = JSON.parse(data).delta?.text ?? '';
            assistantText += delta;
            setMessages(prev => {
              const updated = [...prev];
              updated[updated.length - 1] = { role: 'assistant', content: assistantText };
              return updated;
            });
          } catch { /* skip */ }
        }
      }
    } catch (e) {
      const missing = e instanceof Error && e.message === 'api-missing';
      setMessages(prev => [...prev, { role: 'assistant', content: missing ? 'Bản mã nguồn mở không có API luận giải AI (/api/interpret), bạn cần tự triển khai mới dùng được, xem chi tiết mục “Bắt đầu nhanh” trong README. Việc lập lá số không cần bất kỳ API Key nào.' : 'Luận giải thất bại, vui lòng thử lại sau.' }]);
    } finally {
      setLoading(false);
      loadingRef.current = false;
    }
  };

  const sendMessage = (text: string, hidden = false) => {
    if (!text.trim() || loadingRef.current) return;
    loadingRef.current = true;
    setLoading(true);

    const userMsg: Message = { role: 'user', content: text, hidden };
    // Capture current messages synchronously via ref (avoids stale closure)
    const apiMessages = [...messagesRef.current, userMsg].map(m => ({
      role: m.role,
      content: m.content,
    }));

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    streamResponse(apiMessages);
  };

  const handleTopicClick = (topicKey: string) => {
    if (loadingRef.current) return;
    setActiveTopic(topicKey);
    sendMessage(TOPIC_PROMPTS[topicKey], true);
  };

  const handleSend = () => {
    sendMessage(input);
  };

  return (
    <div className="flex flex-col h-full rounded-xl overflow-hidden card-glass">

      {/* ── Topic buttons ── */}
      <div className="flex-shrink-0 px-2 pt-2.5 pb-2" style={{ borderBottom: '1px solid var(--t-border)' }}>
        <div className="grid grid-cols-6 gap-1">
          {TOPICS.map(t => {
            const isActive = activeTopic === t.key;
            return (
              <button
                key={t.key}
                onClick={() => handleTopicClick(t.key)}
                disabled={loading}
                className="py-1.5 px-0.5 text-[10px] leading-tight font-medium rounded-lg transition-all duration-150 disabled:opacity-40"
                style={{
                  background: isActive ? 'rgba(212,168,67,0.12)' : 'transparent',
                  border: `1px solid ${isActive ? 'rgba(212,168,67,0.3)' : 'var(--t-border)'}`,
                  color: isActive ? 'var(--t-gold)' : 'var(--t-faint)',
                }}
              >
                {t.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Messages ── */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 min-h-0">

        {/* Loading state before first message */}
        {messages.length === 0 && (
          <div className="flex flex-col items-center justify-center h-full text-center">
            <div className="text-4xl mb-3" style={{ color: 'var(--t-gold)', opacity: 0.1 }}>✦</div>
            <p className="text-[10px] animate-pulse" style={{ color: 'var(--t-faint)' }}>Đang luận giải mệnh cách…</p>
          </div>
        )}

        <AnimatePresence initial={false}>
          {messages.map((msg, i) => {
            if (msg.role === 'user' && msg.hidden) return null;

            if (msg.role === 'user') {
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-end"
                >
                  <div
                    className="max-w-[85%] rounded-xl px-3 py-2 text-[11px]"
                    style={{
                      background: 'rgba(212,168,67,0.08)',
                      border: '1px solid rgba(212,168,67,0.18)',
                      color: 'var(--t-gold)',
                    }}
                  >
                    {msg.content}
                  </div>
                </motion.div>
              );
            }

            // Assistant message
            const isLastMsg = i === messages.length - 1;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div
                  className="text-[9px] tracking-widest mb-2 flex items-center gap-1.5"
                  style={{ color: 'var(--t-faint)' }}
                >
                  <span style={{ color: 'var(--t-gold)', opacity: 0.4 }}>✦</span>
                  Luận giải mệnh lý
                </div>
                <AiContent text={msg.content} streaming={loading && isLastMsg} />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* ── Input ── */}
      <div className="flex-shrink-0 px-3 pb-3 pt-2" style={{ borderTop: '1px solid var(--t-border)' }}>
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && !e.shiftKey && handleSend()}
            placeholder="Hỏi tiếp, ví dụ: năm nay có nên đổi việc không?"
            disabled={loading}
            className="flex-1 rounded-lg px-3 py-2 text-[11px] focus:outline-none transition-colors"
            style={{
              background: 'var(--t-card)',
              border: '1px solid var(--t-border)',
              color: 'var(--t-text)',
            }}
          />
          <button
            onClick={handleSend}
            disabled={loading || !input.trim()}
            className="px-3 py-2 rounded-lg text-[11px] font-medium whitespace-nowrap transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            style={{
              background: 'rgba(212,168,67,0.15)',
              border: '1px solid rgba(212,168,67,0.25)',
              color: 'var(--t-gold)',
            }}
          >
            {loading ? '…' : 'Hỏi tiếp'}
          </button>
        </div>
      </div>

    </div>
  );
}

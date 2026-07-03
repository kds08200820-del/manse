// ============================================================
//  3·1만세운동본부 홈페이지 — 연결 설정 (아래 3개만 내 것으로 바꾸면 됩니다)
//  ⚠️ "새로 만든" Supabase 프로젝트 / Cloudflare Worker 값으로 채우세요.
//     값을 채우기 전에는 로그인·업로드만 비활성이고, 나머지 화면은 정상 표시됩니다.
// ============================================================

// (1) Supabase Project URL — Supabase → Project Settings → API → Project URL
window.SUPABASE_URL = 'https://REPLACE.supabase.co';

// (2) Supabase anon(publishable) 공개키 — Project Settings → API → anon public
//     (공개돼도 안전한 키. 데이터는 RLS로 보호됨.) 채우면 로그인이 켜집니다.
window.SUPABASE_ANON_KEY = '';

// (3) Cloudflare Worker 주소(사진·파일 업로드). 새 Worker 배포 후 주소 붙여넣기.
//     예: https://manse-files.내계정.workers.dev  (비우면 업로드만 비활성)
window.R2_WORKER_URL = '';

import { reactive, inject } from 'vue'

export type Locale = 'en' | 'zh'

interface Messages {
  [locale: string]: Record<string, string>
}

const messages: Messages = {
  en: {
    // Tech page
    'tech.hero.title': 'Technology Assets & R&D Matching',
    'tech.hero.sub': 'Curated frontier achievements from leading universities & institutes. Intelligent matching accelerates efficient translation from lab prototype to industrial implementation.',
    'tech.stats.techs': 'Matchable Technologies',
    'tech.stats.fields': 'Disciplinary Fields Covered',
    'tech.stats.custom': 'Custom R&D & Incubation',
    'tech.stats.customVal': 'Tailored',
    'tech.cat.heading': 'Technology Categories',
    'tech.cat.intro': 'Pre‑classified by key industries & technology domains to quickly narrow relevant directions.',
    'tech.cat.materials.title': 'Advanced Materials',
    'tech.cat.materials.desc': 'Composites, high‑performance functional materials & process optimization.',
    'tech.cat.manufacturing.title': 'Intelligent Manufacturing',
    'tech.cat.manufacturing.desc': 'Industrial IoT, digital twins and flexible production optimization.',
    'tech.cat.ai.title': 'Artificial Intelligence',
    'tech.cat.ai.desc': 'Machine learning, vision semantics and intelligent decision engines.',
    'tech.cat.green.title': 'Energy Saving & Environment',
    'tech.cat.green.desc': 'Emission reduction, circular utilization & clean production.',
    'tech.cat.bio.title': 'Biotech & Health',
    'tech.cat.bio.desc': 'Diagnostics, precision medicine & functional biomaterials.',
    'tech.cat.energy.title': 'Electronics & Energy',
    'tech.cat.energy.desc': 'Energy storage, power electronics & novel conversion systems.',
    'tech.collab.heading': 'Collaboration Models',
    'tech.collab.intro': 'Diversified pathways to raise TRL and accelerate deployment.',
    'tech.collab.joint.title': 'Joint R&D',
    'tech.collab.joint.l1': 'Co‑create research topics / experimental plans.',
    'tech.collab.joint.l2': 'Shared resources and IP revenue mechanisms.',
    'tech.collab.transfer.title': 'Technology Transfer',
    'tech.collab.transfer.l1': 'Assessment · due diligence · valuation.',
    'tech.collab.transfer.l2': 'Implementation support & commercialization guidance.',
    'tech.collab.outsourcing.title': 'Contract Development',
    'tech.collab.outsourcing.l1': 'Customized KPIs and milestone management.',
    'tech.collab.outsourcing.l2': 'Stage acceptance & risk control practices.',
    'tech.collab.incubation.title': 'Industrial Incubation',
    'tech.collab.incubation.l1': 'Concept refinement & business model design.',
    'tech.collab.incubation.l2': 'Capital enablement and ecosystem resources.',
    'brand.name': 'Yuchuangwan',
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.cases': 'Industry Collaboration / Success Cases',
    'nav.team': 'Team',
    'nav.services': 'Service System',
    'nav.tech': 'Technology Assets / R&D Match',
    'nav.fund': 'Funds & Investment Research',
  'nav.policy': 'Policy Support',
  'nav.policyEdu': 'Enterprise / University Collaboration',
    'nav.news': 'News & Events',
  'nav.contact': 'Contact Us',
  'nav.industryCollab': 'Industry Collaboration',
  'nav.successCases': 'Success Cases',
  'nav.more': 'Learn More',
  'nav.faq': 'FAQ',
    // Footer
    'footer.copyright': '© 2025 Yuchuangwan · Technology Transfer & Commercialization Platform',
    'home.hero.title': 'Yuchuangwan · End-to-End Technology Transfer & Commercialization Platform',
    'home.hero.sub1': 'Bridging enterprise innovation needs with university & institute research assets via an integrated pipeline: Diagnosis · Matching · Validation (PoC/Pilot) · Compliance · Capital · Deployment & Operations.',
    'home.hero.sub2': 'Data intelligence and a vetted expert network accelerate decision-making, compressing the path from laboratory innovation to industrial scale-up.',
  'home.stats.experts': 'Experts',
  'home.stats.direct': 'Top Univ Links',
  'home.stats.fullchain': 'Service Stages',
    'home.core.heading': 'Core Service Modules',
    'home.core.need': 'Needs Diagnosis',
    'home.core.need.desc': 'Structure pain points; evaluate technical feasibility, risk profile and projected ROI.',
    'home.core.match': 'Technology Matching',
    'home.core.match.desc': 'Federated multi-source IP repository + expert curation to identify optimal technical trajectories.',
    'home.core.poc': 'PoC / Pilot Trials',
    'home.core.poc.desc': 'Generate evidence on key parameters, de‑risk uncertainty before scale-up.',
    'home.core.ip': 'IP Strategy & Compliance',
    'home.core.ip.desc': 'Patent landscaping, portfolio architecture, policy interpretation & certification guidance.',
    'home.core.capital': 'Capital Enablement',
    'home.core.capital.desc': 'Investor roadshows, investment matchmaking & synergy with industry funds.',
    'home.core.operation': 'Park & Operations Enablement',
    'home.core.operation.desc': 'Innovation park access, integrated policy toolkits & sustained post‑transfer operational support.',
  },
  zh: {
    // Tech page
    'tech.hero.title': '技术成果库 / 科研对接',
    'tech.hero.sub': '精选高校与科研院所前沿成果，智能匹配企业需求，助力从实验室到产业现场的高效转化。',
    'tech.stats.techs': '可对接技术',
    'tech.stats.fields': '学科领域覆盖',
    'tech.stats.custom': '科研合作与孵化',
    'tech.stats.customVal': '定制化',
    'tech.cat.heading': '科研成果分类',
    'tech.cat.intro': '按重点产业与技术方向预分类，帮助快速定位匹配领域。',
    'tech.cat.materials.title': '新材料',
    'tech.cat.materials.desc': '复合材料、高性能功能材料与工艺优化。',
    'tech.cat.manufacturing.title': '智能制造',
    'tech.cat.manufacturing.desc': '工业互联网、数字孪生与柔性生产优化。',
    'tech.cat.ai.title': '人工智能',
    'tech.cat.ai.desc': '机器学习、视觉语义与智能决策引擎。',
    'tech.cat.green.title': '节能环保',
    'tech.cat.green.desc': '减排、资源循环与清洁生产技术。',
    'tech.cat.bio.title': '生物健康',
    'tech.cat.bio.desc': '诊断、精准医疗与功能生物材料。',
    'tech.cat.energy.title': '电子能源',
    'tech.cat.energy.desc': '储能、功率电子与新型能源转换。',
    'tech.collab.heading': '科研合作模式',
    'tech.collab.intro': '多元化协同路径，提升技术成熟度与落地效率。',
    'tech.collab.joint.title': '联合研发',
    'tech.collab.joint.l1': '双方共建课题/实验计划',
    'tech.collab.joint.l2': '共享资源与知识产权收益机制',
    'tech.collab.transfer.title': '成果转让',
    'tech.collab.transfer.l1': '评估+尽调+价值定价',
    'tech.collab.transfer.l2': '转化实施与落地辅导支持',
    'tech.collab.outsourcing.title': '委托开发',
    'tech.collab.outsourcing.l1': '定制技术指标与里程碑',
    'tech.collab.outsourcing.l2': '阶段验收与风险控制机制',
    'tech.collab.incubation.title': '产业孵化',
    'tech.collab.incubation.l1': '项目打磨+商业模式设计',
    'tech.collab.incubation.l2': '资本赋能与载体资源协同',
    'brand.name': '育创湾',
    // Navigation
    'nav.home': '首页',
    'nav.about': '关于我们',
    'nav.cases': '产业合作 / 成功案例',
    'nav.team': '团队成员',
    'nav.services': '服务体系',
    'nav.tech': '技术成果库 / 科研对接',
    'nav.fund': '基金与投研',
  'nav.policy': '政策支持',
  'nav.policyEdu': '企业 / 高校合作',
    'nav.news': '新闻与活动',
  'nav.contact': '联系我们',
  'nav.industryCollab': '产业合作',
  'nav.successCases': '成功案例',
  'nav.more': '了解更多',
  'nav.faq': '常见问题',
    // Footer
    'footer.copyright': '© 2025 育创湾 · 技术转移与成果转化平台',
    'home.hero.title': '育创湾 · 全流程技术转移与成果转化平台',
    'home.hero.sub1': '连接企业需求与高校/科研成果，提供贯穿“诊断—匹配—验证—合规—资本—落地运营”的一体化服务。',
    'home.hero.sub2': '以数据与专家网络驱动决策，缩短创新转化路径，提升成果落地效率。',
    'home.stats.experts': '专家网络',
    'home.stats.direct': '双一流高校直连',
    'home.stats.fullchain': '全链条服务环节',
    'home.core.heading': '核心服务',
    'home.core.need': '需求诊断',
    'home.core.need.desc': '梳理痛点、评估技术可行性与投入产出预期。',
    'home.core.match': '技术匹配',
    'home.core.match.desc': '多源成果库+专家筛选，精准对接最优技术方向。',
    'home.core.poc': 'PoC / 中试',
    'home.core.poc.desc': '验证关键参数，降低规模化落地的不确定性。',
    'home.core.ip': '知识产权与合规',
    'home.core.ip.desc': '专利评估、组合布局及政策/认证合规辅导。',
    'home.core.capital': '资本助力',
    'home.core.capital.desc': '项目路演、投融资撮合与产业基金协同。',
    'home.core.operation': '园区与运营',
    'home.core.operation.desc': '载体空间、政策集成与成果持续运营支持。',
  }
}

// 初始化语言：优先 localStorage -> 浏览器语言前两位 -> 默认 en
function detectInitialLocale(): Locale {
  const saved = typeof window !== 'undefined' ? localStorage.getItem('locale') as Locale | null : null
  if (saved && (saved === 'en' || saved === 'zh')) return saved
  if (typeof navigator !== 'undefined') {
    const nav = navigator.language.toLowerCase()
    if (nav.startsWith('zh')) return 'zh'
  }
  return 'en'
}

const state = reactive({ locale: detectInitialLocale() }) // 默认可能被检测覆盖
if (typeof document !== 'undefined') {
  document.documentElement.setAttribute('lang', state.locale === 'zh' ? 'zh-CN' : 'en')
}

export function setLocale(locale: Locale){
  if(state.locale === locale) return
  state.locale = locale
  if (typeof window !== 'undefined') {
    localStorage.setItem('locale', locale)
  }
  if (typeof document !== 'undefined') {
    document.documentElement.setAttribute('lang', locale === 'zh' ? 'zh-CN' : 'en')
  }
}

export function t(key: string): string {
  return messages[state.locale]?.[key] || key
}

const I18N_SYMBOL = Symbol('i18n')

export function provideI18n(app: any){
  app.provide(I18N_SYMBOL, { t, setLocale, state })
}

export function useI18n(){
  return inject<{ t: typeof t; setLocale: typeof setLocale; state: typeof state }>(I18N_SYMBOL)!;
}

export { messages, state }

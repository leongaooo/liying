import './App.css'
import { motion, useReducedMotion } from 'framer-motion'

type Experience = {
  company: string
  role: string
  period: string
  highlights: string[]
}

function App() {
  const shouldReduceMotion = useReducedMotion()

  const advantages = [
    '成功通过 2023 年会计资格证考试、2024 年基金从业资格证考试、2025 年证券从业资格证考试，并正在备考税务师考试，具备扎实的专业能力和学习效率。',
    '具备出色的沟通技巧，能在团队中建立有效合作，并通过严谨的逻辑思维解决复杂问题。',
    '对数据分析有高度敏感性，能够精准执行税务计划，确保项目目标按时达成。',
    '熟练使用财务软件与 Office 办公，提升工作效率与数据处理准确性。',
    '持续关注财税动态，及时掌握政策变化，辅助业务合规与风险控制。',
    '逻辑清晰、执行力强，善于梳理流程并推动落地，适应快节奏工作节奏。',
    '具备独立查账与对账能力，能快速定位差异并提出改进建议。',
    '拥有两年多大型企业会计工作经验，熟悉行业运作，具备实战经验。',
  ]

  const experiences: Experience[] = [
    {
      company: '金九国际咨询服务（北京）有限公司',
      role: '税务外勤会计',
      period: '2023.06 - 2023.08',
      highlights: ['撰写相关投资备案材料', '税局业务', '填写外勤备案材料', '开发票、申报税等'],
    },
    {
      company: '内蒙古新科驼绒制品技术开发有限公司',
      role: '会计助理',
      period: '2022.07 - 2023.02',
      highlights: ['粘贴凭证、核对凭证', '开具发票、报税', '协助开工资金、社保等'],
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <div className="app">
      <header className="header">
        <div className="header-bg" aria-hidden="true">
          <motion.div
            className="header-gradient"
            animate={
              shouldReduceMotion
                ? undefined
                : {
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                    scale: [1, 1.02, 1],
                    rotate: [0, 0.6, 0],
                    opacity: [0.85, 1, 0.85],
                  }
            }
            transition={
              shouldReduceMotion
                ? undefined
                : {
                    duration: 14,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }
            }
          />
          <motion.div
            className="bg-blob blob-1"
            animate={shouldReduceMotion ? undefined : { y: [0, -12, 0], x: [0, 10, 0] }}
            transition={
              shouldReduceMotion
                ? undefined
                : { duration: 8, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }
            }
          />
          <motion.div
            className="bg-blob blob-2"
            animate={shouldReduceMotion ? undefined : { y: [0, 14, 0], x: [0, -12, 0] }}
            transition={
              shouldReduceMotion
                ? undefined
                : { duration: 10, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }
            }
          />
        </div>

        <motion.div
          className="header-content"
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: -18 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.div
            className="hero"
            initial={shouldReduceMotion ? undefined : 'hidden'}
            animate={shouldReduceMotion ? undefined : 'show'}
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
            }}
          >
            <div className="hero-left">
              <motion.div
                className="avatar-container"
                initial={shouldReduceMotion ? undefined : { opacity: 0, scale: 0.9, rotate: -2 }}
                animate={shouldReduceMotion ? undefined : { opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                whileHover={shouldReduceMotion ? undefined : { y: -3, rotate: 0.8, scale: 1.015 }}
              >
                <img className="avatar-img" src="/profile.jpg" alt="杨丽英头像" />
                <div className="avatar-ring" aria-hidden="true" />
              </motion.div>
              <motion.div
                className="hero-identity"
                initial={shouldReduceMotion ? undefined : { opacity: 0, y: 8 }}
                animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.h1
                  className="name"
                  initial={shouldReduceMotion ? undefined : { opacity: 0, y: -6 }}
                  animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  杨丽英
                </motion.h1>
                <motion.p
                  className="title"
                  initial={shouldReduceMotion ? undefined : { opacity: 0, y: -4 }}
                  animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                >
                  会计 / 税务方向｜3 年工作经验｜期望北京
                </motion.p>

                <motion.p
                  className="subtitle"
                  initial={shouldReduceMotion ? undefined : { opacity: 0, y: 8 }}
                  animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
                >
                  擅长财税流程梳理与外勤税务对接，注重效率与合规；持续学习职业证书体系，保持专业迭代。
                </motion.p>

                <motion.div
                  className="hero-actions"
                  initial={shouldReduceMotion ? undefined : { opacity: 0, y: 10 }}
                  animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
                >
                  <motion.a
                    href="/杨丽英简历.pdf"
                    download
                    className="resume-button"
                    whileHover={
                      shouldReduceMotion
                        ? undefined
                        : { scale: 1.03, y: -1, boxShadow: '0 14px 34px rgba(0,0,0,0.18)' }
                    }
                    whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                  >
                    下载简历
                  </motion.a>
                  <motion.a
                    className="ghost-button"
                    href="#contact"
                    whileHover={shouldReduceMotion ? undefined : { y: -1, scale: 1.01 }}
                    whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                  >
                    联系我
                  </motion.a>
                </motion.div>
              </motion.div>
            </div>

            <motion.div
              className="hero-right"
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 12 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <motion.div
                className="stat-grid"
                initial={shouldReduceMotion ? undefined : 'hidden'}
                animate={shouldReduceMotion ? undefined : 'show'}
                variants={{
                  hidden: { opacity: 0 },
                  show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.12 } },
                }}
              >
                <motion.div className="stat-card" variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}>
                  <div className="stat-value">3 年</div>
                  <div className="stat-label">工作经验</div>
                </motion.div>
                <motion.div className="stat-card" variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}>
                  <div className="stat-value">10–13K</div>
                  <div className="stat-label">期望薪资</div>
                </motion.div>
                <motion.div className="stat-card" variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}>
                  <div className="stat-value">会计 / 税务</div>
                  <div className="stat-label">求职方向</div>
                </motion.div>
                <motion.div className="stat-card" variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}>
                  <div className="stat-value">北京</div>
                  <div className="stat-label">期望城市</div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </header>

      <main className="main">
        <motion.section
          className="section"
          id="advantages"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={container}
        >
          <motion.div className="section-head" variants={item}>
            <h2>个人优势</h2>
            <p className="section-subtitle">用证书体系夯实专业，用流程与数据提升效率与合规。</p>
          </motion.div>
          <motion.ul className="advantage-list" variants={container}>
            {advantages.map((text) => (
              <motion.li key={text} className="advantage-item" variants={item}>
                {text}
              </motion.li>
            ))}
          </motion.ul>
        </motion.section>

        <motion.section
          className="section"
          id="experience"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={container}
        >
          <motion.div className="section-head" variants={item}>
            <h2>工作经历</h2>
            <p className="section-subtitle">覆盖税务外勤、开票申报、凭证对账等核心环节。</p>
          </motion.div>

          <div className="timeline">
            {experiences.map((exp) => (
              <motion.article
                key={`${exp.company}-${exp.period}`}
                className="timeline-card"
                variants={item}
                whileHover={shouldReduceMotion ? undefined : { y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <div className="timeline-title">
                  <div className="timeline-role">
                    <h3>{exp.company}</h3>
                    <p className="timeline-meta">
                      {exp.role} · {exp.period}
                    </p>
                  </div>
                </div>
                <ul className="timeline-highlights">
                  {exp.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="section"
          id="target"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={container}
        >
          <motion.div className="section-head" variants={item}>
            <h2>求职意向</h2>
            <p className="section-subtitle">更看重专业成长与稳定产出，愿意长期深耕财税方向。</p>
          </motion.div>

          <motion.div className="intent-grid" variants={container}>
            <motion.div className="intent-card" variants={item}>
              <div className="intent-k">意向岗位</div>
              <div className="intent-v">会计 / 税务会计</div>
            </motion.div>
            <motion.div className="intent-card" variants={item}>
              <div className="intent-k">期望薪资</div>
              <div className="intent-v">10–13K</div>
            </motion.div>
            <motion.div className="intent-card" variants={item}>
              <div className="intent-k">期望城市</div>
              <div className="intent-v">北京</div>
            </motion.div>
            <motion.div className="intent-card" variants={item}>
              <div className="intent-k">证书学习</div>
              <div className="intent-v">会计资格 / 基金从业 / 证券从业 / 备考税务师</div>
            </motion.div>
          </motion.div>
        </motion.section>

        <motion.section
          className="section"
          id="contact"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={container}
        >
          <motion.div className="section-head" variants={item}>
            <h2>联系方式</h2>
            <p className="section-subtitle">欢迎交流岗位与合作机会。</p>
          </motion.div>

          <motion.div className="contact-card" variants={item}>
            <div className="contact-row">
              <div className="contact-k">手机</div>
              <div className="contact-v">156 4747 8170</div>
            </div>
            <div className="contact-row">
              <div className="contact-k">简历</div>
              <div className="contact-v">
                <a href="/杨丽英简历.pdf" download>
                  直接下载 PDF
                </a>
              </div>
            </div>
          </motion.div>
        </motion.section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} 杨丽英 · Personal Profile</p>
      </footer>
    </div>
  )
}

export default App

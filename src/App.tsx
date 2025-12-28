import './App.css'

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <h1 className="name">杨丽英 ｜ Liying</h1>
          <p className="title">经济学研究者</p>
        </div>
      </header>

      <main className="main">
        <section className="about">
          <div className="about-content">
            <div className="avatar-container">
              <div className="avatar"></div>
            </div>
            <div className="bio">
              <h2>关于我</h2>
              <p>
                您好！我是杨丽英，一名专注于经济学领域的研究者。
                我的研究兴趣包括宏观经济学、发展经济学以及数字经济对传统产业的影响。
                我致力于通过数据驱动的方法分析经济现象，探索经济发展的内在规律。
              </p>
              <p>
                在这个博客中，我将分享我的研究心得、读书感悟以及对经济热点问题的思考。
                欢迎关注并与我交流！
              </p>
            </div>
          </div>
        </section>

        <section className="research">
          <h2>研究方向</h2>
          <div className="research-areas">
            <div className="research-item">
              <h3>宏观经济学</h3>
              <p>研究经济增长、通货膨胀与就业之间的关系</p>
            </div>
            <div className="research-item">
              <h3>发展经济学</h3>
              <p>探索发展中国家的经济发展路径与政策选择</p>
            </div>
            <div className="research-item">
              <h3>数字经济</h3>
              <p>分析数字技术对经济结构和产业升级的影响</p>
            </div>
          </div>
        </section>

        <section className="contact">
          <h2>联系我</h2>
          <div className="contact-info">
            <p>Email: liying@example.com</p>
            <p>WeChat: yingli_econ</p>
            <p>ResearchGate: Liying Yang</p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2025 杨丽英的个人博客. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App

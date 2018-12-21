import React from 'react'
import { Link } from 'react-router-dom'

const tabArr = [
  {
    icon: '#icon-filedicon_home_gree',
    content: '首页',
    path: '/'
  },
  {
    icon: '#icon-fenlei',
    content: '分类',
    path: '/classify'
  },
  {
    icon: '#icon-gouwuche',
    content: '购物车',
    path: '/cart'
  },
  {
    icon: '#icon-jinrongxianxingge-',
    content: '我的',
    path: '/account'
  }
]

export default WrappedComponent => ({ match }) => (
  <div className="tabbar-container">
    <div className="tabbar-children">
      <WrappedComponent />
    </div>
    <nav className="tabbar">
      {tabArr.map(item => (
        <Link
          to={item.path}
          key={item.content}
          className={`tabbar-item ${match.url === item.path ? 'active' : ''}`}
        >
          <svg className="icon" aria-hidden="true">
            <use xlinkHref={item.icon} />
          </svg>
          <span>{item.content}</span>
        </Link>
      ))}
    </nav>
  </div>
)

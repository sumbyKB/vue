import App from '../App'
//路由规则 
const Home = r => require.ensure([], () => r(require('@/components/Home')), 'Home') //首页
const Search = r => require.ensure([], () => r(require('@/components/Search')), 'Search')  //搜索
const Login = r => require.ensure([], () => r(require('@/components/Login')), 'Login') //登录注册页
const Life = r => require.ensure([], () => r(require('@/components/Life')), 'Life')  //生活
const User = r => require.ensure([], () => r(require('@/components/user/User')), 'User')  //我的
const Info = r => require.ensure([], () => r(require('@/components/user/Info')), 'Info')  //个人信息
const ModifyUserName = r => require.ensure([], () => r(require('@/components/user/ModifyUserName')), 'ModifyUserName')  //修改用户名
const ModifyPhone = r => require.ensure([], () => r(require('@/components/user/ModifyPhone')), 'ModifyPhone')  //更换手机号码
const Service = r => require.ensure([], () => r(require('@/components/user/Service')), 'Service')  //联系客服
const Suggest = r => require.ensure([], () => r(require('@/components/user/Suggest')), 'Suggest')  //建议反馈
const Share = r => require.ensure([], () => r(require('@/components/user/Share')), 'Share')  //分享
const Setting = r => require.ensure([], () => r(require('@/components/user/Setting')), 'Setting')  //设置
const About = r => require.ensure([], () => r(require('@/components/user/About')), 'About')  //关于
const Wallet = r => require.ensure([], () => r(require('@/components/wallet/wallet')), 'Wallet')  //钱包
const WalletBill = r => require.ensure([], () => r(require('@/components/wallet/WalletBill')), 'WalletBill')  //钱包账单
const WalletDetail = r => require.ensure([], () => r(require('@/components/wallet/WalletDetail')), 'WalletDetail')  //钱包明细
const Shop = r => require.ensure([], () => r(require('@/components/shop/Shop')), 'Shop')  // 购物
const GoodDetail = r => require.ensure([], () => r(require('@/components/shop/GoodDetail')), 'GoodDetail')  // 超市商品详情页
const ShopDetail = r => require.ensure([], () => r(require('@/components/shop/ShopDetail')), 'ShopDetail')  // 商城商品详情页
const ConfirmOrder = r => require.ensure([], () => r(require('@/components/ConfirmOrder')), 'ConfirmOrder')  //确认订单
const Order = r => require.ensure([], () => r(require('@/components/order/Order')), 'Order')  //订单列表
const OrderDetail = r => require.ensure([], () => r(require('@/components/order/OrderDetail')), 'OrderDetail')  //订单详情
const OrderApply = r => require.ensure([], () => r(require('@/components/order/OrderApply')), 'OrderApply')  //订单售后申请
const Address = r => require.ensure([], () => r(require('@/components/address/Address')), 'Address')  // 收货地址
const ChooseAddress = r => require.ensure([], () => r(require('@/components/address/ChooseAddress')), 'ChooseAddress')  //选择地址
const AddAddress = r => require.ensure([], () => r(require('@/components/address/AddAddress')), 'AddAddress')  //添加地址
const Cart = r => require.ensure([], () => r(require('@/components/Cart')), 'Cart')  //购物车
// const benefit = r => require.ensure([], () => r(require('../page/benefit/benefit')), 'benefit')  // 专题福利页
const Coupon = r => require.ensure([], () => r(require('@/components/coupon/Coupon')), 'Coupon')  // 我的优惠券
const GetCoupon = r => require.ensure([], () => r(require('@/components/coupon/GetCoupon')), 'GetCoupon')  // 领取优惠券
const GouponGood = r => require.ensure([], () => r(require('@/components/coupon/GouponGood')), 'GouponGood')  // 优惠券商品
const List = r => require.ensure([], () => r(require('@/components/coupon/list')), 'list')  // 我的优惠券
const List2 = r => require.ensure([], () => r(require('@/components/coupon/list2')), 'list2')  // 我的优惠券
const Packet = r => require.ensure([], () => r(require('@/components/packet/Packet')), 'Packet')  // 红包
const GetPacket = r => require.ensure([], () => r(require('@/components/packet/GetPacket')), 'GetPacket')  // 领取红包页
const PacketDescription = r => require.ensure([], () => r(require('@/components/packet/PacketDescription')), 'PacketDescription')  // 红包说明
const Points = r => require.ensure([], () => r(require('@/components/points/Points')), 'Points')  // 积分
const PointsDetail = r => require.ensure([], () => r(require('@/components/points/PointsDetail')), 'PointsDetail')  // 积分明细
const Act = r => require.ensure([], () => r(require('@/components/Act')), 'Act')  // 积分
const NotFoundComponent = r => require.ensure([], () => r(require('@/components/404')), 'notFoundComponent')   //404页

export default [
  //地址为空时跳转home页面
  {
    path: '/',
    redirect: '/home'
  },
  {//首页
    path: '/home',
    component: Home,
    name:'home',
    meta: {
      name: '首页',  // 头部导航name
      title: '首页',  //页面title
      navBool:true,  //是否显示头部导航
      barBool:true,  //是否显示底部标签栏
      keepAlive: false
    }
  },
  {//登录
    path: '/login',
    component: Login
  },
  {//搜索
    path: '/search',
    component: Search,
    meta: {
      name: '首页',  // 头部导航name
      title: '首页',  //页面title
      navBool:true,  //是否显示头部导航
      barBool:true,  //是否显示底部标签栏
      keepAlive: false
    }
  },
  {
    path: '/act',   // 专题
    component: Act
  },
  {//生活
    path: '/life',
    component: Life,
    meta: {
      name: '生活',  // 头部导航name
      title: '生活',  //页面title
      navBool:true,  //是否显示头部导航
      barBool:true,  //是否显示底部标签栏
      keepAlive: false
    }
  },
  {
    path: '/user', //我的
    component: User,
    meta: {
      name: '我的',  // 头部导航name
      title: '我的',  //页面title
      navBool:true,  //是否显示头部导航
      barBool:true,  //是否显示底部标签栏
      keepAlive: false
    }
  },
  {
    path: '/user/info',   // 个人信息
    component: Info,
		meta: {
			name: '个人信息',  // 头部导航name
			title: '个人信息',  //页面title
			navBool:true,  //是否显示头部导航
			barBool:true,  //是否显示底部标签栏
			keepAlive: false
		}
  },
  {
    path:'/user/info/modifyuserName',  // 修改用户名
		component: ModifyUserName,
		meta: {
			name: '修改用户名',  // 头部导航name
			title: '修改用户名',  //页面title
			navBool:true,  //是否显示头部导航
			barBool:true,  //是否显示底部标签栏
			keepAlive: false
		}
  },
  {
    path:'/user/info/modifyPhone',  // 更换手机号码
    component: ModifyPhone,
		meta: {
			name: '验证身份',  // 头部导航name
			title: '验证身份',  //页面title
			navBool:true,  //是否显示头部导航
			barBool:true,  //是否显示底部标签栏
			keepAlive: false
		}
  },
  {
    path: '/user/service',   // 联系客服
    component: Service
  },
  {
    path: '/user/suggest',    // 意见反馈
    component: Suggest
  },
  {
    path: '/user/share',   // 分享
    component: Share
  },
  {
    path: '/user/about',   // 关于
    component: About,
		meta: {
			name: '关于',  // 头部导航name
			title: '关于',  //页面title
			navBool:true,  //是否显示头部导航
			barBool:true,  //是否显示底部标签栏
			keepAlive: false
		}
  },
  {
    path: '/user/setting',   // 设置
    component: Setting,
		meta: {
			name: '设置',  // 头部导航name
			title: '设置',  //页面title
			navBool:true,  //是否显示头部导航
			barBool:true,  //是否显示底部标签栏
			keepAlive: false
		}
  },
  // 钱包
  {
    path: '/wallet',   // 钱包
    component: Wallet,
		meta: {
			name: '钱包',  // 头部导航name
			title: '钱包',  //页面title
			navBool:true,  //是否显示头部导航
			barBool:true,  //是否显示底部标签栏
			keepAlive: false
		}
  },
  {
    path:'/wallet/walletBill',  // 钱包账单
    component: WalletBill,
		meta: {
			name: '账单',  // 头部导航name
			title: '账单',  //页面title
			navBool:true,  //是否显示头部导航
			barBool:true,  //是否显示底部标签栏
			keepAlive: false
		}
  },
  {
    path:'/wallet/walletDetail',  // 钱包明细
    component: WalletDetail, 
		meta: {
			name: '明细',  // 头部导航name
			title: '明细',  //页面title
			navBool:true,  //是否显示头部导航
			barBool:true,  //是否显示底部标签栏
			keepAlive: false
		}
  },
  //购物
  {
    path: '/shop',  //商品列表
    component: Shop,
    name: 'shop',
    meta: {
      name: '购物',  // 头部导航name
      title: '购物',  //页面title
      navBool:true,  //是否显示头部导航
      barBool:true,  //是否显示底部标签栏
      keepAlive: false
    }
  },
  {
    path: '/shop/goodDetail', // 超市商品详情页
    component: GoodDetail
  },
  {
    path: '/shop/shopDetail', // 商场商品详情页
    component: ShopDetail
  },
  //订单列表页
  {
    path: '/order', // 我的订单
    component: Order
  },
  {
    path: '/order/orderDetail', //订单详情页
    component: OrderDetail,
  },
  {
    path: '/order/orderApply', //订单申请售后
    component: OrderApply,
  },
  //确认订单页
  {
    path: '/confirmOrder',
    component: ConfirmOrder,
  },
  {
    path: '/address', //选择地址
    component: Address
  },
  {
    path: '/address/chooseAddress', //选择地址
    component: ChooseAddress
  },
  {
    path: '/address/addAddress', //添加地址
    component: AddAddress
  },
  //购物车
  {
      path: '/cart',
      component: Cart,
      meta: {
        name: '购物车',  // 头部导航name
        title: '购物车',  //页面title
        navBool:true,  //是否显示头部导航
        barBool:true,  //是否显示底部标签栏
        keepAlive: false
      }
  },
  //我的优惠页，优惠券&&红包
  // {
  //   path: '/benefit',  //福利
  //   component: benefit,
  // },
  {
    path: '/coupon', //我的优惠券
    component: Coupon,
		meta: {
			name: '优惠券',  // 头部导航name
			title: '优惠券',  //页面title
			navBool:true,  //是否显示头部导航
			barBool:true,  //是否显示底部标签栏
			keepAlive: false
		}
  },
  {
    path: '/coupon/getCoupon', // 优惠券领取中心
    component: GetCoupon
  },
  {
    path: '/coupon/gouponGood', // 优惠券商品
    component: GouponGood,
		meta: {
			name: '优惠券商品',  // 头部导航name
			title: '优惠券商品',  //页面title
			navBool:true,  //是否显示头部导航
			barBool:true,  //是否显示底部标签栏
			keepAlive: false
		}
  },
	{
		path: '/coupon/list', // 优惠券商品
		component: List,
		meta: {
			name: '优惠券商品',  // 头部导航name
			title: '优惠券商品',  //页面title
			navBool:true,  //是否显示头部导航
			barBool:true,  //是否显示底部标签栏
			keepAlive: false
		}
	},
	{
		path: '/coupon/list2', // 优惠券商品
		component: List2,
		meta: {
			name: '优惠券商品',  // 头部导航name
			title: '优惠券商品',  //页面title
			navBool:true,  //是否显示头部导航
			barBool:true,  //是否显示底部标签栏
			keepAlive: false
		}
	},
  {
    path:'/packet',   // 我的
    component: Packet,
    meta: {
      name: '红包',  // 头部导航name
      title: '红包',  //页面title
      keepAlive: false
    }
  },
  {
    path:'/packet/getPacket',   // 红包领取中心
    component: GetPacket
  },
  {
    path: '/packet/packetDescription', //红包说明
    component: PacketDescription,
  },
  {
    path: '/points',
    component: Points,
  },
  {
    path: '/points/pointsDetail', //积分说明
    component: PointsDetail,
  },
  { 
    path: '*',  // 404页，路由匹配不到时的跳转页
    component: NotFoundComponent 
  }

]

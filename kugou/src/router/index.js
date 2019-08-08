//首页组件 ---导航栏
import classify from './classify'
import mv from './mv'
import ranking from './ranking'
import recommend from './recommend'
import search from './search'
import singer from './singer'
import login from './login'
import register from './Register'
import areacode from './Areacode'

const routers = [
    ...search,
    ...recommend,
    ...ranking,
    ...classify,
    ...singer,
    ...mv,
    ...login,
    ...register,
    ...areacode
]
export default {
    basename:"newh5",
    forceRefresh:false,
    routers
}
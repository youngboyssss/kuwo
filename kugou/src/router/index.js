//首页组件 ---导航栏
import classify from './classify'
import mv from './mv'
import ranking from './ranking'
import recommend from './recommend'
import search from './search'
import singer from './singer'

const routers = [
    ...recommend,
    ...ranking,
    ...classify,
    ...singer,
    ...mv,
    ...search
]
export default {
    basename:"newh5",
    forceRefresh:true,
    routers
}
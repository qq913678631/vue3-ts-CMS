import zcRequest from '..'

enum DashboardApi {
  categoryGoodsCount = '/goods/category/count',
  categoryGoodsSale = '/goods/category/sale',
  categoryGoodsFavor = '/goods/category/favor',
  addressGoodsSale = '/goods/address/sale'
}

export function getCategoryGoodsCount() {
  return zcRequest.get({
    url: DashboardApi.categoryGoodsCount
  })
}

export function getCategoryGoodsSale() {
  return zcRequest.get({
    url: DashboardApi.categoryGoodsSale
  })
}

export function getCategoryGoodsFavor() {
  return zcRequest.get({
    url: DashboardApi.categoryGoodsFavor
  })
}

export function getAddressGoodsSale() {
  return zcRequest.get({
    url: DashboardApi.addressGoodsSale
  })
}

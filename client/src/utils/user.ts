export const getUserBadgeFromStoresAdded = (storesAdded) => {
  if (storesAdded < 0) return
  if (storesAdded >= 1 && storesAdded <= 5) {
    return 'its between 1 and 5'
  } else if (storesAdded >= 6 && storesAdded <= 15) {
    return 'its between 6 and 15'
  } else if (storesAdded >= 16 && storesAdded <= 25) {
    return 'its between 16 and 25'
  } else if (storesAdded >= 26 && storesAdded <= 35) {
    return 'its between 26 and 35'
  } else if (storesAdded >= 36 && storesAdded <= 45) {
    return 'its between 36 and 45'
  }
}

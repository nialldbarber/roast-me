export const getUserBadgeFromStoresAdded = (storesAdded: number): string => {
	if (storesAdded < 0) return ''
	if (storesAdded >= 1 && storesAdded <= 5) {
		return 'Badge Tier 1'
	} else if (storesAdded >= 6 && storesAdded <= 15) {
		return 'Badge Tier 2'
	} else if (storesAdded >= 16 && storesAdded <= 25) {
		return 'Badge Tier 3'
	} else if (storesAdded >= 26 && storesAdded <= 35) {
		return 'Badge Tier 4'
	} else if (storesAdded >= 36 && storesAdded <= 45) {
		return 'Badge Tier 5'
	} else {
		return ''
	}
}

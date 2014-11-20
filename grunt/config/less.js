module.exports = {

    // Dev
    dev: {
        files: {
        	'skin/frontend/{PACKAGE}/{THEME}/css/style.css' : 'skin/frontend/{PACKAGE}/{THEME}/less/style.less',
        }
    },

    // Build
    build: {
        files: {
        	'skin/frontend/{PACKAGE}/{THEME}/css/style.min.css' : 'skin/frontend/{PACKAGE}/{THEME}/less/style.less',
        }
    }

}
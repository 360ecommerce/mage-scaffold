module.exports = {

    // Dev
    dev: {
        files: {
        	'skin/frontend/{package}}/{theme}}/css/style.css' : 'skin/frontend/{package}}/{theme}}/less/style.less',
        }
    },

    // Build
    build: {
        files: {
        	'skin/frontend/{package}}/{theme}}/css/style.min.css' : 'skin/frontend/{package}}/{theme}}/less/style.less',
        }
    }

}
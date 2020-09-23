const indexCtrl = {};

indexCtrl.renderindex = (req, res)=>{
    res.render('index')
};

indexCtrl.renderabout = (req, res)=>{
    res.render('about')
};

module.exports = indexCtrl;
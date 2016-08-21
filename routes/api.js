exports.initApp = function(app){
    /******************************
     *            WEB
     *****************************/
    app.route('/user')
        .get(userCtrl.getLoginPage)
        .post(userCtrl.login)
        .update(userCtrl.join)
        .delete(userCtrl.logout);

    app.route('/campaign')
        .get(userCtrl.loginCheck, campaignCtrl.getCampaignList)
        .post(userCtrl.loginCheck, campaignCtrl.addCampaign)
        .delete(userCtrlloginCheck, campaignCtrl.deleteCampaign);

    app.route('/menu/:campaign')
        .get(userCtrl.loginCheck, userCtrl.checkSupervisor, campaignCtrl.checkCampaign, menuCtrl.getMenuList)
        .post(userCtrl.loginCheck, userCtrl.checkSupervisor, campaignCtrl.checkCampaign, menuCtrl.addMenu)
        .delete(userCtrl.loginCheck, userCtrl.checkSupervisor, campaignCtrl.checkCampaign, menuCtrl.deleteMenu);

    /********************************
     *            Mobile
     *******************************/
    app.route('/mobile')
        .get(mobileCtrl.getMainPage);

    app.route('/mobile/:campaign')
        .get(mobileCtrl.getCampaignMain);


};
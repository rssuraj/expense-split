var express = require(`express`);

var router = express.Router();

let currentUser = {};

// Landing Page/Root Route
router.get(`/`, (req, res) => {
    res.redirect(`/login`);
});

//Login Get Route, Display login form
router.get(`/login`, (req, res) => {
    const data = {
        formAction: `/login`,
        isLogin: true,
        loginClass: `active`,
        message: `Login to your account`
    };
    res.render(`landing`, { data: data });
});

//Login Post Route, Logs in the User and redirects to dashboard
router.post(`/login`, (req, res) => {
    //Validate user, if valid then redirect to dashboard
    currentUser = req.body.user;
    res.redirect(`/dashboard`);
    //else display error message using connect-flash
});

//Register Get Route, Display register form
router.get(`/register`, (req, res) => {
    const data = {
        formAction: `/register`,
        isLogin: false,
        registerClass: `active`,
        message: `Create a new account`
    };
    res.render(`landing`, { data: data });
});

//Register Post Route, Creates a new User and redirects to dashboard
router.post(`/register`, (req, res) => {
    //Create user, if success then redirect to dashboard
    currentUser = req.body.user;
    res.redirect(`/dashboard`);
    //else display error message using connect-flash
});

router.get(`/dashboard`, (req, res) => {
    const data = {
        component: `Dashboard`,
        dashboardActive: `active`,
        card: {
            heading: `Details`,
            text: `You have no outstanding balance, Add an expense.`
        }
    };
    res.render(`home`, { currentUser: currentUser, data: data });
});

router.get(`/groups`, (req, res) => {
    const data = {
        component: `Groups`,
        groupsActive: `active`,
        card: {
            heading: `Groups`,
            text: `You have no groups created, Add a group.`,
            btnText: `Add Group`
        }
    };
    res.render(`home`, { currentUser: currentUser, data: data });
});

router.get(`/family`, (req, res) => {
    const data = {
        component: `Family`,
        familyActive: `active`,
        card: {
            heading: `Family members`,
            text: `You have no family members here, Add a member.`,
            btnText: `Add Member`
        }
    };
    res.render(`home`, { currentUser: currentUser, data: data });
});

router.get(`/friends`, (req, res) => {
    const data = {
        component: `Friends`,
        friendsActive: `active`,
        card: {
            heading: `Friends`,
            text: `You have no freinds added here, Add a friend.`,
            btnText: `Add Friend`
        }
    };
    res.render(`home`, { currentUser: currentUser, data: data });
});

module.exports = router;
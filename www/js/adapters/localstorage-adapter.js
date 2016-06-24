var LocalStorageAdapter = function () {

    this.initialize = function() {
        var deferred = $.Deferred();
        // Store sample data in Local Storage
        window.localStorage.setItem("employees", JSON.stringify(
            [
                {"id": 1, "firstName": "Iris", "lastName": "Tzor ", "managerId": 0, "managerName": "", "title": "President and CEO", "department": "Corporate", "cellPhone": "054-5585943", "officePhone": "054-5585943", "email": "iristzur@gmail.com", "city": "Ramat-Gan, Israel", "pic": "iris.jpg", "twitterId": "@fakeeyal", "blog": "http://cyber.org.il/"},
                {"id": 2, "firstName": "Tomer", "lastName": "Talgam", "managerId": 1, "managerName": "Iris Tzur", "title": "VP RnD", "department": "Engineering", "cellPhone": "054-4954006", "officePhone": "054-4954006", "email": "ttalgam@gmail.com", "city": "Tel-Aviv, Israel", "pic": "tomer.jpg", "twitterId": "@fakejtaylor", "blog": "http://cyber.org.il/"},
                {"id": 3, "firstName": "Michael", "lastName": "Michael", "managerId": 1, "managerName": "Iris Tzur", "title": "VP of Services", "department": "Engineering", "cellPhone": "617-000-0003", "officePhone": "781-000-0003", "email": "ttalgam@gmail.com", "city": "Ramat-Gan, Israel", "pic": "michael.jpg", "twitterId": "@fakeelee", "blog": "http://cyber.org.il/"},
                {"id": 4, "firstName": "Asaf", "lastName": "Yossef", "managerId": 2, "managerName": "Tomer Talgam", "title": "CFO", "department": "Sales", "cellPhone": "054-2547180", "officePhone": "054-2547180", "email": "asaf9398@gmail.com", "city": "Ramat-Gan, Israel", "pic": "asaf.jpg", "twitterId": "@fakejwilliams", "blog": "http://cyber.org.il/"},
                {"id": 5, "firstName": "Yuval", "lastName": "Fatal", "managerId": 2, "managerName": "Tomer Talgam", "title": "VP HR", "department": "HR", "cellPhone": "050-2006751", "officePhone": "050-2006751", "email": "yuval.fatal@gmail.com", "city": "Ramat-Gan, Israel", "pic": "fatal.jpg", "twitterId": "@fakermoore", "blog": "http://cyber.org.il/"},
                {"id": 6, "firstName": "Guy", "lastName": "Ovad", "managerId": 2, "managerName": "Tomer Talgam", "title": "Marketing Manager", "department": "Marketing", "cellPhone": "050-2814806", "officePhone": "050-2814806", "email": "maxy333k@gmail.com", "city": "Ramat-Gan, Israel", "pic": "guy.jpg", "twitterId": "@fakepjones", "blog": "http://cyber.org.il/"},
                {"id": 7, "firstName": "Idan", "lastName": "Dreshman", "managerId": 2, "managerName": "Tomer Talgam", "title": "Product Manager", "department": "Engineering", "cellPhone": "052-5447577", "officePhone": "052-5447577", "email": "idan879@gmail.com", "city": "Ramat-Gan, Israel", "pic": "idan.jpg", "twitterId": "@fakepgates", "blog": "http://cyber.org.il/"},
                {"id": 8, "firstName": "Ido", "lastName": "Gal", "managerId": 2, "managerName": "Tomer Talgam", "title": "Marketing Manager", "department": "Engineering", "cellPhone": "054-2374737", "officePhone": "054-2374737", "email": "gal.iddo@gmail.com", "city": "Ramat-Gan, Israel", "pic": "ido.jpg", "twitterId": "@fakelwong", "blog": "http://cyber.org.il/"},
                {"id": 9, "firstName": "Matan", "lastName": "Baranes", "managerId": 2, "managerName": "Tomer Talgam", "title": "HR Manager", "department": "HR", "cellPhone": "054-2550411", "officePhone": "054-2550411", "email": "matbaranes@gmail.com", "city": "Ramat-Gan, Israel", "pic": "matan.jpg", "twitterId": "@fakegdonovan", "blog": "http://cyber.org.il/"},
                {"id": 10, "firstName": "Misha", "lastName": "Brickman", "managerId": 2, "managerName": "Tomer Talgam", "title": "Sales Representative", "department": "Marketing", "cellPhone": "054-8022686", "officePhone": "054-8022686", "email": "mbricman8@gmail.com", "city": "Ramat-Gan, Israel", "pic": "misha.jpg", "twitterId": "@fakekbyrne", "blog": "http://cyber.org.il/"},
                {"id": 11, "firstName": "Nitay", "lastName": "Hershcuvits", "managerId": 2, "managerName": "Tomer Talgam", "title": "Team Leader", "department": "Engineering", "cellPhone": "050-9024297", "officePhone": "050-9024297", "email": "nitay.hershko97@gmail.com", "city": "Ramat-Gan, Israel", "pic": "nitay.jpg", "twitterId": "@fakeajones", "blog": "http://cyber.org.il/"},
                {"id": 12, "firstName": "Oded", "lastName": "Ginat", "managerId": 2, "managerName": "Tomer Talgam", "title": "Team Leader", "department": "Engineering", "cellPhone": "052-7308798", "officePhone": "052-7308798", "email": "odedginat@gmail.com", "city": "Ramat-Gan, Israel", "pic": "oded.jpg", "twitterId": "@fakeajones", "blog": "http://cyber.org.il/"},
                {"id": 13, "firstName": "Ofer", "lastName": "Sapir", "managerId": 2, "managerName": "Tomer Talgam", "title": "Team Leader", "department": "Engineering", "cellPhone": "052-8086758", "officePhone": "052-8086758", "email": "oferikko@gmail.com", "city": "Ramat-Gan, Israel", "pic": "ofer.jpg", "twitterId": "@fakeajones", "blog": "http://cyber.org.il/"},
                {"id": 14, "firstName": "Shachar", "lastName": "Rosenberg", "managerId": 2, "managerName": "Tomer Talgam", "title": "Team Leader", "department": "Engineering", "cellPhone": "054-3452315", "officePhone": "054-3452315", "email": "shacharr3@gmail.com", "city": "Ramat-Gan, Israel", "pic": "shachar.jpg", "twitterId": "@fakeajones", "blog": "http://cyber.org.il/"},
                {"id": 15, "firstName": "Shaked", "lastName": "Yechezkel", "managerId": 2, "managerName": "Tomer Talgam", "title": "Team Leader", "department": "Engineering", "cellPhone": "054-7530590", "officePhone": "054-7530590", "email": "shaked@yeheel.net", "city": "Ramat-Gan, Israel", "pic": "shaked.jpg", "twitterId": "@fakeajones", "blog": "http://cyber.org.il/"},
                {"id": 16, "firstName": "Shani", "lastName": "Eyal", "managerId": 2, "managerName": "Tomer Talgam", "title": "Team Leader", "department": "Engineering", "cellPhone": "054-4956740", "officePhone": "054-4956740", "email": "shani3600@gmail.com", "city": "Ramat-Gan, Israel", "pic": "shani.jpg", "twitterId": "@fakeajones", "blog": "http://cyber.org.il/"},
                {"id": 17, "firstName": "Tal", "lastName": "Sagiv", "managerId": 2, "managerName": "Tomer Talgam", "title": "Team Leader", "department": "Engineering", "cellPhone": "054-3194640", "officePhone": "054-3194640", "email": "tal_sagiv@gmail.com", "city": "Ramat-Gan, Israel", "pic": "tal.jpg", "twitterId": "@fakeajones", "blog": "http://cyber.org.il/"},
                {"id": 18, "firstName": "Tom", "lastName": "Kaninin", "managerId": 2, "managerName": "Tomer Talgam", "title": "Team Leader", "department": "Engineering", "cellPhone": "054-3982626", "officePhone": "054-3982626", "email": "tomtomkan@gmail.com", "city": "Ramat-Gan, Israel", "pic": "tom.jpg", "twitterId": "@fakeajones", "blog": "http://cyber.org.il/"},
                {"id": 19, "firstName": "Yoav", "lastName": "Rabinovits", "managerId": 2, "managerName": "Tomer Talgam", "title": "Team Leader", "department": "Engineering", "cellPhone": "055-6651106", "officePhone": "055-6651106", "email": "yoavr1106@gmail.com", "city": "Ramat-Gan, Israel", "pic": "yoav.jpg", "twitterId": "@fakeajones", "blog": "http://cyber.org.il/"},
                {"id": 20, "firstName": "Yuval", "lastName": "Barak", "managerId": 2, "managerName": "Tomer Talgam", "title": "Team Leader", "department": "Engineering", "cellPhone": "054-4886099", "officePhone": "054-4886099", "email": "barakyuval@gmail.com", "city": "Ramat-Gan, Israel", "pic": "yuval_barak.jpg", "twitterId": "@fakeajones", "blog": "http://cyber.org.il/"}
            ]
        ));
        deferred.resolve();
        return deferred.promise();
    }

    this.findById = function (id) {

        var deferred = $.Deferred(),
            employees = JSON.parse(window.localStorage.getItem("employees")),
            employee = null,
            l = employees.length;

        for (var i = 0; i < l; i++) {
            if (employees[i].id === id) {
                employee = employees[i];
                break;
            }
        }

        deferred.resolve(employee);
        return deferred.promise();
    }

    this.findByName = function (searchKey) {
        var deferred = $.Deferred(),
            employees = JSON.parse(window.localStorage.getItem("employees")),
            results = employees.filter(function (element) {
                var fullName = element.firstName + " " + element.lastName;
                return fullName.toLowerCase().indexOf(searchKey.toLowerCase()) > -1;
            });
        deferred.resolve(results);
        return deferred.promise();
    }

}
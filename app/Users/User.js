"use strict";
var User = (function () {
    function User(id_c, name_c, lastName_c, password_c, email_c, avatar_c) {
        this.id = id_c;
        this.name = name_c;
        this.lastName = lastName_c;
        this.email = email_c;
        this.password = password_c;
        this.avatar = avatar_c || "perm_identity";
    }
    return User;
}());
exports.User = User;
//# sourceMappingURL=User.js.map
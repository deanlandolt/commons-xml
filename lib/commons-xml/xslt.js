var engine = require("./runtime/rhino/xslt-engine");
for (var key in engine) {
    exports[key] = engine[key];
}

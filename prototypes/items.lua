local utl = require("utl")

data:extend({
    {
        type = "item",
        name = utl.PR .. "greenhouse",
        icon = utl.GP .. "/entity/greenhouse/gh_icon.png",
        icon_size = 128,
        -- flags = { "goes-to-quickbar" },
        subgroup = "production-machine",
        order = "e[2]",
        place_result = utl.PR .. "greenhouse",
        stack_size = 10
    }
})

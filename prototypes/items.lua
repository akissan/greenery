local utl = require("utl")

data:extend({
    {
        type = "item",
        name = utl.PR .. "greenhouse",
        icon = utl.GP .. "/items/greenhouse.png",
        icon_size = 128,
        -- flags = { "goes-to-quickbar" },
        subgroup = "production-machine",
        order = "g[greenhouse]",
        place_result = utl.PR .. "greenhouse",
        stack_size = 10
    }, {
        type = "item",
        name = utl.PR .. "test-cube",
        icon = utl.GP .. "/items/test-cube.png",
        icon_size = 128,
        -- flags = { "goes-to-quickbar" },
        subgroup = "storage",
        order = "0[test-cube]",
        place_result = utl.PR .. "test-cube",
        stack_size = 50
    }, {
        type = "item",
        name = utl.PR .. "sprinkler",
        icon = utl.GP .. "/items/sprinkler.png",
        icon_size = 128,
        -- flags = { "goes-to-quickbar" },
        subgroup = "intermediate-product",
        order = "s[sprinkler]",
        stack_size = 100
    }
})

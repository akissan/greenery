local utl = require("utl")

data:extend({
    {
        type = "item",
        name = utl.PR .. "greenhouse",
        icon = utl.GP .. "items/greenhouse.png",
        icon_size = 128,
        -- flags = { "goes-to-quickbar" },
        subgroup = "production-machine",
        order = "e[2]",
        place_result = utl.PR .. "greenhouse",
        stack_size = 10
    }, {
        type = "item",
        name = utl.PR .. "test-cube",
        icon = utl.GP .. "items/test-cube.png",
        icon_size = 128,
        -- flags = { "goes-to-quickbar" },
        subgroup = "container",
        order = "b[storage]",
        place_result = utl.PR .. "test-cube",
        stack_size = 50
    }
})

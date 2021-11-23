local utl = require("utl")

data:extend({
    --[[
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
    }, {
        type = "item",
        name = utl.PR .. "test-grid",
        icon = utl.GP .. "/entity/test-grid/test-grid.png",
        icon_size = 32,
        -- flags = { "goes-to-quickbar" },
        subgroup = "storage",
        place_result = utl.PR .. "test-grid",
        order = "s[tg]",
        stack_size = 100
    }, {
        type = "item",
        name = utl.PR .. "seed-bed",
        icon = utl.GP .. "/items/seed-bed.png",
        icon_size = 128,
        -- flags = { "goes-to-quickbar" },
        subgroup = "production-machine",
        place_result = utl.PR .. "seed-bed",
        order = "s[sb]",
        stack_size = 10
    }
    ]] --
    {
        type = "item",
        name = utl.PR .. "hsi",
        icon = utl.GP .. "/items/hsi.png",
        icon_size = 64,
        -- flags = { "goes-to-quickbar" },
        subgroup = "intermediate-product",
        -- place_result = utl.PR .. "seed-bed",
        order = "hs[i]",
        stack_size = 50
    }, {
        type = "item",
        name = utl.PR .. "hsi-q",
        icon = utl.GP .. "/items/hsi-q.png",
        icon_size = 64,
        -- flags = { "goes-to-quickbar" },
        subgroup = "intermediate-product",
        -- place_result = utl.PR .. "seed-bed",
        order = "hs[q]",
        stack_size = 10
    }, {
        type = "item",
        name = utl.PR .. "test-cube-1",
        icon = utl.GP .. "/entity/test-cube-2/1x1x45.png",
        icon_size = 64,
        subgroup = "intermediate-product",
        place_result = utl.PR .. "test-cube-1",
        order = "tc[1]",
        stack_size = 99
    }, {
        type = "item",
        name = utl.PR .. "test-cube-2",
        icon = utl.GP .. "/entity/test-cube-2/2x2x45.png",
        icon_size = 128,
        subgroup = "intermediate-product",
        place_result = utl.PR .. "test-cube-2",
        order = "tc[2]",
        stack_size = 99
    }, {
        type = "item",
        name = utl.PR .. "nest",
        icon = utl.GP .. "/items/nest.png",
        icon_size = 128,
        subgroup = "production-machine",
        place_result = utl.PR .. "nest",
        order = "nest",
        stack_size = 20
    }
})

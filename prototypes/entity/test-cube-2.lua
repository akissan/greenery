local utl = require("utl")
local e_name = "test-cube-2"

data:extend({
    {
        type = "container",
        name = utl.PR .. e_name,
        icon = utl.GP .. "/entity/test-cube-2/2x2x45.png",
        -- icon = utl.GP .. "/items/" .. "test-cube".. ".png",
        icon_size = 128,
        flags = {"placeable-neutral", "placeable-player", "player-creation"},
        minable = {mining_time = 0.2, result = utl.PR .. e_name},
        max_health = 100,
        corpse = "small-remnants",
        dying_explosion = "iron-chest-explosion",

        alert_icon_shift = utl.by_pixel(0, -6),
        collision_box = {{-0.375 * 2, -0.35 * 2}, {0.375 * 2, 0.4 * 2}},
        selection_box = {{-0.46 * 2, -1}, {0.46 * 2, 0.46 * 2}},
        drawing_box = {{-0.5, -0.5}, {0.5, 0.5}},

        resistances = {{type = "impact", percent = 70}},
        open_sound = {
            filename = "__base__/sound/metallic-chest-open.ogg",
            volume = 0.43
        },
        close_sound = {
            filename = "__base__/sound/metallic-chest-close.ogg",
            volume = 0.43
        },
        vehicle_impact_sound = table.deepcopy(
            data.raw.container["steel-chest"].vehicle_impact_sound),
        picture = {
            layers = {
                {
                    filename = utl.GP .. "/entity/" .. "test-cube-2" .. "/" ..
                        "2x2x45" .. ".png",
                    priority = "high",
                    width = 128,
                    height = 128,
                    shift = {0, 0},
                    hr_version = {
                        filename = utl.GP .. "/entity/" .. "test-cube-2" .. "/" ..
                            "2x2x45" .. "-hr.png",
                        priority = "high",
                        width = 256,
                        height = 256,
                        shift = {0, 0},
                        scale = 0.5
                    }
                }
                -- {
                --     draw_as_shadow = true,
                --     filename = utl.GP .. "/entity/" .. e_name .. "/" .. e_name ..
                --         "_shadow.png",
                --     priority = "high",
                --     width = 64,
                --     height = 64,
                --     shift = {1.0, -0.2},
                --     hr_version = {
                --         filename = utl.GP .. "/entity/" .. e_name .. "/" ..
                --             e_name .. "_shadow.png",
                --         priority = "high",
                --         width = 64,
                --         height = 64,
                --         shift = {1.0, -0.2}
                --     }
                -- }
            }
        },
        crafting_categories = {"storage"},
        inventory_size = 120
    }
})

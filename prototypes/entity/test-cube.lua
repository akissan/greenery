local utl = require("utl")
local e_name = "test-cube"

data:extend({
    {
        type = "container",
        name = utl.PR .. e_name,
        icon = utl.GP .. "/items/" .. e_name .. ".png",
        icon_size = 128,
        flags = {"placeable-neutral", "placeable-player", "player-creation"},
        minable = {mining_time = 0.2, result = utl.PR .. e_name},
        max_health = 100,
        corpse = "small-remnants",
        dying_explosion = "iron-chest-explosion",

        alert_icon_shift = utl.by_pixel(0, -6),
        collision_box = {{-0.5, -0.5}, {0.5, 0.5}},
        selection_box = {{-0.5, -0.5}, {0.5, 0.5}},
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
                    filename = utl.GP .. "/entity/" .. e_name .. "/" .. e_name ..
                        ".png",
                    priority = "high",
                    width = 256,
                    height = 256,
                    shift = {0, 0},
                    hr_version = {
                        filename = utl.GP .. "/entity/" .. e_name .. "/hr_" ..
                            e_name .. ".png",
                        priority = "high",
                        width = 512,
                        height = 512,
                        shift = {0, 0},
                        scale = 0.25
                    }
                }, {
                    draw_as_shadow = true,
                    filename = utl.GP .. "/entity/" .. e_name .. "/" .. e_name ..
                        "_shadow.png",
                    priority = "high",
                    width = 256,
                    height = 256,
                    shift = {2.0, 0.0},
                    hr_version = {
                        draw_as_shadow = true,
                        filename = utl.GP .. "/entity/" .. e_name .. "/" ..
                            e_name .. "_shadow.png",
                        priority = "high",
                        width = 256,
                        height = 256,
                        shift = {0.0, 0.0},
                        scale = 0.25
                    }
                }
            }
        },
        crafting_categories = {"crafting"},
        inventory_size = 120
    }
})

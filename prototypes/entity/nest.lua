local utl = require("utl")
local e_name = "nest"

data:extend({
    {
        type = "assembling-machine",
        name = utl.PR .. e_name,
        icon = utl.GP .. "/items/" .. e_name .. ".png",
        icon_size = 128,
        flags = {"placeable-neutral", "placeable-player", "player-creation"},
        minable = {mining_time = 0.2, result = utl.PR .. e_name},
        max_health = 700,
        corpse = "small-remnants",
        dying_explosion = "medium-explosion",
        fast_replaceable_group = "assembling-machine",

        alert_icon_shift = utl.by_pixel(0, -12),
        collision_box = {{-0.375 * 2, -0.35 * 2}, {0.375 * 2, 0.4 * 2}},
        selection_box = {{-0.46 * 2, -1}, {0.46 * 2, 0.46 * 2}},
        drawing_box = {{-0.5, -0.5}, {0.5, 0.5}},

        resistances = {{type = "electric", percent = 70}},
        open_sound = {
            filename = "__base__/sound/passive-provider-chest-open-2.ogg",
            volume = 0.85
        },
        close_sound = {
            filename = "__base__/sound/power-switch-activate-2.ogg",
            volume = 0.75
        },
        vehicle_impact_sound = {
            filename = "__base__/sound/car-metal-impact.ogg",
            volume = 0.65
        },
        working_sound = {
            sound = {
                {
                    filename = "__base__/sound/creatures/spawner.ogg",
                    volume = 0.6
                },
                {
                    filename = "__base__/sound/creatures/biter-walk-big-3.ogg",
                    volume = 0.6
                }
            },
            idle_sound = {
                filename = "__base__/sound/storage-tank.ogg",
                volume = 0.7
            },
            apparent_volume = 1
        },
        animation = {
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
            }
        },
        crafting_categories = {utl.PR .. "apiary"},
        crafting_speed = 1,
        energy_source = {
            type = "electric",
            usage_priority = "secondary-input",
            emissions_per_minute = 4
        },
        energy_usage = "30kW",
        ingredient_count = 12,
        module_specification = {module_slots = 4},
        allowed_effects = {"consumption", "speed", "pollution"}
    }
})

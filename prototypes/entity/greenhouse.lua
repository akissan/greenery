local utl = require("utl")

data:extend({
    {
        type = "assembling-machine",
        name = utl.PR .. "greenhouse",
        icon = utl.GP .. "/items/i_greenhouse.png",
        icon_size = 512,
        flags = {"placeable-neutral", "placeable-player", "player-creation"},
        minable = {mining_time = 0.2, result = utl.PR .. "greenhouse"},
        max_health = 700,
        corpse = "big-remnants",
        dying_explosion = "medium-explosion",
        fast_replaceable_group = "assembling-machine",

        alert_icon_shift = utl.by_pixel(0, -12),
        collision_box = {{-6, -6}, {6, 6}},
        selection_box = {{-6, -6}, {6, 6}},
        drawing_box = {{-6, -6}, {6, 6}},

        resistances = {{type = "electric", percent = 70}},
        open_sound = {
            filename = "__base__/sound/machine-open.ogg",
            volume = 0.85
        },
        close_sound = {
            filename = "__base__/sound/machine-close.ogg",
            volume = 0.75
        },
        vehicle_impact_sound = {
            filename = "__base__/sound/car-metal-impact.ogg",
            volume = 0.65
        },
        working_sound = {
            sound = {
                {filename = "__base__/sound/pumpjack.ogg", volume = 0.8},
                {
                    filename = "__base__/sound/assembling-machine-t3-1.ogg",
                    volume = 0.8
                }
            },
            idle_sound = {filename = "__base__/sound/pipe.ogg", volume = 0.6},
            apparent_volume = 1.5
        },
        animation = {
            layers = {
                {
                    filename = utl.GP .. "/entity/greenhouse/greenhouse.png",
                    priority = "high",
                    width = 512,
                    height = 512,
                    frame_count = 24,
                    line_length = 6,
                    shift = {0, 0},
                    animation_speed = 0.1,
                    hr_version = {
                        filename = utl.GP .. "/entity/greenhouse/greenhouse.png",
                        priority = "high",
                        width = 512,
                        height = 512,
                        frame_count = 24,
                        line_length = 6,
                        shift = {0, 0},
                        animation_speed = 0.1,
                        scale = 1.0
                    }
                }, {
                    draw_as_shadow = true,
                    filename = utl.GP ..
                        "/entity/greenhouse/greenhouse_shadow.png",
                    priority = "high",
                    width = 256,
                    height = 256,
                    frame_count = 1,
                    line_length = 1,
                    repeat_count = 24,
                    shift = {2.0, 0.0},
                    hr_version = {
                        draw_as_shadow = true,
                        filename = utl.GP ..
                            "/entity/greenhouse/greenhouse_shadow.png",
                        priority = "high",
                        width = 256,
                        height = 256,
                        frame_count = 1,
                        line_length = 1,
                        repeat_count = 24,
                        shift = {2.0, 0.0},
                        scale = 2.0
                    }
                }
            }
        },
        crafting_categories = {"crafting", "advanced-crafting"},
        crafting_speed = 4,
        energy_source = {
            type = "electric",
            usage_priority = "secondary-input",
            emissions_per_minute = 4
        },
        energy_usage = "3000kW",
        ingredient_count = 12,
        module_specification = {module_slots = 4},
        allowed_effects = {"consumption", "speed", "pollution"},
        working_visualisations = {
            {
                effect = "uranium-glow",
                light = {
                    intensity = 0.2,
                    size = 16,
                    shift = {0.0, 0.0},
                    color = {r = 0.6, g = 1, b = 0.5}
                }
            }
        }
    }
})

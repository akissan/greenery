# Greenery content

## Buildings

- ![tc_icon](./graphics/items/test_cube.png) Test Cube `test-cube`
- Seed Bed `seed-bed`
- Glasshouse `glasshouse`
- ![gh_icon](./graphics/items/greenhouse.png) Greenhouse `greenhouse`

- Nanoinjector `injector`

- Extractor `extractor`

## Items

### Plant-related

- Nauvius seeds `seeds`
- Nauvius biomass `biomass`

- Supernutrient medium `nutrient`
- Supplement solution `supplement`

### Biology-related

- Microfauna `microfauna`

### Nanobiology-related

- HS-I `hsi`
- HS-I Queen `hsi-q`

- Nanowax `nanowax`
- Hive `hive`
- Apiary `apiary`
- Nest `nest`

### Components

- Sand dust `sand`
- Glass `glass`
- Sprinkler `sprinkler`

## Recipes

| Name        | Category            | C1            | C2                 | C3              | C4       |
| ----------- | ------------------- | ------------- | ------------------ | --------------- | -------- |
| seed-bed    | crafting            | landfill x4   | wood x4            | sprinkler x2    |
| seed-bed    | crafting            | landfill x4   | iron-plate x4      | sprinkler x2    |
| glasshouse  | crafting            | seed-bed 4    | steel-plate x4     | sprinkler x8    | glass x4 |
| greenhouse  | crafting            | glasshouse x2 | steel-plate x8     | glass x16       |
| sand        | crafting            | stone x1      |
| glass       | smelting            | sand x4       |
| srinkler    | crafting            | pipe x2       | iron-stick x2      |
| seeds       | crafting            | biomass       | supplement x2      |
| seeds       | crafting            | biomass       | nutrient           |
| biomass     | cultivation         | seeds         | water x100         |
| biomass     | cultivation         | seeds         | water x100         | supplement x 5  |
| biomass     | cultivation         | seeds         | water x100         | nutrient x1     |
| biomass     | cultivation         | seeds         | steam x200         | nutrient x1     |
| supplement  | crafting            | coal x2       | stone x2           |
| nutrient    | extraction          | biomass x20   |
| nutrient x2 | extraction          | microfauna    |
| microfauna  | crafting            | biomass x10   | nutrient           | iron-plate x4   | glass    |
| hsi         | injecting           | microfauna    | electronic-circuit |
| hsi-q       | injecting           | hs-i x50      | nutrient x2        | processing-unit |
| hsi         | apiculture          | supplement x5 |
| hsi         | apiculture          | nutrient      |
| hsi         | apiculture          | hsi-q         |
| hsi-q       | apiculture          | nutrient x25  |
| nanowax     | crafting-with-fluid | light-oil     | sand x10           | coal x20        |
| nanowax     | apiculture          | hsi           | supplement x5      |
| nanowax     | apiculture          | hsi           | nutrient           |
| nanowax     | apiculture          | hsi           | nanowax            |
| ...         |

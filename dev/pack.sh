aseprite_path="../../../Aseprite/"
entity_path="../graphics/entity/$1/"
items_path="../graphics/items/"

# echo $(ls $aseprite_path/)

$aseprite_path/Aseprite -b hr/${1}*.png --sheet ${entity_path}hr_$1.png --sheet-type rows --sheet-columns 6  
$aseprite_path/Aseprite -b lr/${1}*.png --sheet ${entity_path}$1.png --sheet-type rows --sheet-columns 6

# ./Aseprite/Aseprite -b shadows/shadow_${1}*.png --sheet $1.png --sheet-type rows --sheet-columns 6

cp_and_keep_last()
{
  ts=$( ls -1 $2/$1*.png )
  lt=$(echo "${ts}" | tail -n 1 )

  echo $3$1.png

  cp $lt $3$1$4\.png
  ot=( $(echo "${ts}.png" | grep -v $lt ) )

  for f in $( echo "$ot" ); do
    echo $f
#    rm $f
  done
}

cp_and_keep_last $1 icons ${items_path}
cp_and_keep_last $1 shadows ${entity_path} _shadow 


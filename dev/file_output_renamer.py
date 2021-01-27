import bpy

bl_info = {
    "name": "File Outputs for Factorio",
    "blender": (2, 80, 0),
    "category": "Nodes",
}

class _OT_outputFileRenamer(bpy.types.Operator):
    bl_idname = "node.outputfilerenamer"
    bl_label = "Rename outputs"
    
    @classmethod
    def poll(cls, context):
        return (bpy.context.scene.node_tree.nodes.get("LROutput") is not None and 
        bpy.context.scene.node_tree.nodes.get("HROutput") is not None and
        bpy.context.scene.node_tree.nodes.get("SHOutput") is not None);
    
    def execute(self, context):
        base_path = bpy.context.scene.node_tree.nodes["SampleFolderPicker"].base_path
        
        hr_path = 'hr\\'
        hr_node = bpy.context.scene.node_tree.nodes["HROutput"]
        
        lr_path = 'lr\\'
        lr_node = bpy.context.scene.node_tree.nodes["LROutput"]
        
        sh_path = 'sh\\'
        sh_node = bpy.context.scene.node_tree.nodes["SHOutput"]
        
        hr_node.file_slots[0].path = hr_path + context.scene.entity_name
        lr_node.file_slots[0].path = lr_path + context.scene.entity_name
        sh_node.file_slots[0].path = sh_path + context.scene.entity_name
        
        hr_node.base_path = base_path
        lr_node.base_path = base_path
        sh_node.base_path = base_path
        return {'FINISHED'}

class _PT_TestPanel(bpy.types.Panel):
    bl_label = "Factorio output"
    bl_idname = "panel._PT_testpanel"
    bl_space_type = 'NODE_EDITOR'
    bl_region_type = 'UI'
    bl_category = 'Item'

    def draw(self, context):
        layout = self.layout
        col = self.layout.column(align = True)
        col.prop(context.scene, "entity_name")

        row = layout.row()

        if bpy.context.scene.node_tree.nodes.get("LROutput") is None:
            row.label(text="LROutput not found", icon='ERROR')
            row = layout.row()
        if bpy.context.scene.node_tree.nodes.get("HROutput") is None:
            row.label(text="HROutput not found", icon='ERROR')
            row = layout.row()
        if bpy.context.scene.node_tree.nodes.get("SHOutput") is None:
            row.label(text="SHOutput not found", icon='ERROR')
            row = layout.row()

        row.operator("node.outputfilerenamer")
        row = layout.row()
        
def register():
  bpy.utils.register_class(_OT_outputFileRenamer) 
  bpy.types.Scene.entity_name = bpy.props.StringProperty \
      (
        name = "Entity",
        description = "Entity name",
        default = "default"
      )
  bpy.utils.register_class(_PT_TestPanel)


def unregister():
  bpy.utils.unregister_class(_PT_TestPanel)
  del bpy.types.Scene.entity_name
  bpy.utils.unregister_class(_OT_outputFileRenamer)


if __name__ == "__main__":
  register()
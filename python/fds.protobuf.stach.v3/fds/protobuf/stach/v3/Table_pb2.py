# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: fds/protobuf/stach/v3/Table.proto
"""Generated protocol buffer code."""
from google.protobuf.internal import builder as _builder
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from fds.protobuf.stach.v3 import MetadataItem_pb2 as fds_dot_protobuf_dot_stach_dot_v3_dot_MetadataItem__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n!fds/protobuf/stach/v3/Table.proto\x12\x19\x66\x61\x63tset.protobuf.stach.v3\x1a(fds/protobuf/stach/v3/MetadataItem.proto\"\xfd\x04\n\x05Table\x12\x14\n\x0cprimary_keys\x18\x01 \x03(\t\x12\x16\n\x0etotal_num_rows\x18\x02 \x01(\x05\x12\x42\n\x0cgroup_result\x18\x03 \x01(\x0b\x32,.factset.protobuf.stach.v3.Table.GroupResult\x12\x42\n\x0csplit_result\x18\x04 \x01(\x0b\x32,.factset.protobuf.stach.v3.Table.SplitResult\x12M\n\x0f\x63ustom_metadata\x18\x64 \x03(\x0b\x32\x34.factset.protobuf.stach.v3.Table.CustomMetadataEntry\x1a\xab\x01\n\x0bGroupResult\x12\n\n\x02\x62y\x18\x01 \x03(\t\x12W\n\x17\x63ollapsed_column_result\x18\x02 \x01(\x0b\x32\x36.factset.protobuf.stach.v3.Table.CollapsedColumnResult\x12\x10\n\x08row_path\x18\x03 \x01(\t\x12\x16\n\x0e\x61ggregate_rows\x18\x04 \x01(\t\x12\r\n\x05level\x18\x05 \x01(\t\x1a%\n\x15\x43ollapsedColumnResult\x12\x0c\n\x04name\x18\x01 \x01(\t\x1a:\n\x0bSplitResult\x12+\n#multi_level_headers_table_reference\x18\x01 \x01(\t\x1a^\n\x13\x43ustomMetadataEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\x36\n\x05value\x18\x02 \x01(\x0b\x32\'.factset.protobuf.stach.v3.MetadataItem:\x02\x38\x01\x42\x85\x01\n\x1d\x63om.factset.protobuf.stach.v3B\nTableProtoZ<github.com/factset/stachschema-sdks/go/fds/protobuf/stach/v3\xaa\x02\x19\x46\x61\x63tSet.Protobuf.Stach.V3b\x06proto3')

_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, globals())
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'fds.protobuf.stach.v3.Table_pb2', globals())
if _descriptor._USE_C_DESCRIPTORS == False:

  DESCRIPTOR._options = None
  DESCRIPTOR._serialized_options = b'\n\035com.factset.protobuf.stach.v3B\nTableProtoZ<github.com/factset/stachschema-sdks/go/fds/protobuf/stach/v3\252\002\031FactSet.Protobuf.Stach.V3'
  _TABLE_CUSTOMMETADATAENTRY._options = None
  _TABLE_CUSTOMMETADATAENTRY._serialized_options = b'8\001'
  _TABLE._serialized_start=107
  _TABLE._serialized_end=744
  _TABLE_GROUPRESULT._serialized_start=378
  _TABLE_GROUPRESULT._serialized_end=549
  _TABLE_COLLAPSEDCOLUMNRESULT._serialized_start=551
  _TABLE_COLLAPSEDCOLUMNRESULT._serialized_end=588
  _TABLE_SPLITRESULT._serialized_start=590
  _TABLE_SPLITRESULT._serialized_end=648
  _TABLE_CUSTOMMETADATAENTRY._serialized_start=650
  _TABLE_CUSTOMMETADATAENTRY._serialized_end=744
# @@protoc_insertion_point(module_scope)

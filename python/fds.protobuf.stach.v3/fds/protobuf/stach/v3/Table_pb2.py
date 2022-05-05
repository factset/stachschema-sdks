# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: fds/protobuf/stach/v3/Table.proto

from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from fds.protobuf.stach.v3 import MetadataItem_pb2 as fds_dot_protobuf_dot_stach_dot_v3_dot_MetadataItem__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='fds/protobuf/stach/v3/Table.proto',
  package='factset.protobuf.stach.v3',
  syntax='proto3',
  serialized_options=b'\n\035com.factset.protobuf.stach.v3B\nTableProtoZ<github.com/factset/stachschema-sdks/go/fds/protobuf/stach/v3\252\002\031FactSet.Protobuf.Stach.V3',
  create_key=_descriptor._internal_create_key,
  serialized_pb=b'\n!fds/protobuf/stach/v3/Table.proto\x12\x19\x66\x61\x63tset.protobuf.stach.v3\x1a(fds/protobuf/stach/v3/MetadataItem.proto\"\xfd\x04\n\x05Table\x12\x14\n\x0cprimary_keys\x18\x01 \x03(\t\x12\x16\n\x0etotal_num_rows\x18\x02 \x01(\x05\x12\x42\n\x0cgroup_result\x18\x03 \x01(\x0b\x32,.factset.protobuf.stach.v3.Table.GroupResult\x12\x42\n\x0csplit_result\x18\x04 \x01(\x0b\x32,.factset.protobuf.stach.v3.Table.SplitResult\x12M\n\x0f\x63ustom_metadata\x18\x64 \x03(\x0b\x32\x34.factset.protobuf.stach.v3.Table.CustomMetadataEntry\x1a\xab\x01\n\x0bGroupResult\x12\n\n\x02\x62y\x18\x01 \x03(\t\x12W\n\x17\x63ollapsed_column_result\x18\x02 \x01(\x0b\x32\x36.factset.protobuf.stach.v3.Table.CollapsedColumnResult\x12\x10\n\x08row_path\x18\x03 \x01(\t\x12\x16\n\x0e\x61ggregate_rows\x18\x04 \x01(\t\x12\r\n\x05level\x18\x05 \x01(\t\x1a%\n\x15\x43ollapsedColumnResult\x12\x0c\n\x04name\x18\x01 \x01(\t\x1a:\n\x0bSplitResult\x12+\n#multi_level_headers_table_reference\x18\x01 \x01(\t\x1a^\n\x13\x43ustomMetadataEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\x36\n\x05value\x18\x02 \x01(\x0b\x32\'.factset.protobuf.stach.v3.MetadataItem:\x02\x38\x01\x42\x85\x01\n\x1d\x63om.factset.protobuf.stach.v3B\nTableProtoZ<github.com/factset/stachschema-sdks/go/fds/protobuf/stach/v3\xaa\x02\x19\x46\x61\x63tSet.Protobuf.Stach.V3b\x06proto3'
  ,
  dependencies=[fds_dot_protobuf_dot_stach_dot_v3_dot_MetadataItem__pb2.DESCRIPTOR,])




_TABLE_GROUPRESULT = _descriptor.Descriptor(
  name='GroupResult',
  full_name='factset.protobuf.stach.v3.Table.GroupResult',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='by', full_name='factset.protobuf.stach.v3.Table.GroupResult.by', index=0,
      number=1, type=9, cpp_type=9, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='collapsed_column_result', full_name='factset.protobuf.stach.v3.Table.GroupResult.collapsed_column_result', index=1,
      number=2, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='row_path', full_name='factset.protobuf.stach.v3.Table.GroupResult.row_path', index=2,
      number=3, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='aggregate_rows', full_name='factset.protobuf.stach.v3.Table.GroupResult.aggregate_rows', index=3,
      number=4, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='level', full_name='factset.protobuf.stach.v3.Table.GroupResult.level', index=4,
      number=5, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=378,
  serialized_end=549,
)

_TABLE_COLLAPSEDCOLUMNRESULT = _descriptor.Descriptor(
  name='CollapsedColumnResult',
  full_name='factset.protobuf.stach.v3.Table.CollapsedColumnResult',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='name', full_name='factset.protobuf.stach.v3.Table.CollapsedColumnResult.name', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=551,
  serialized_end=588,
)

_TABLE_SPLITRESULT = _descriptor.Descriptor(
  name='SplitResult',
  full_name='factset.protobuf.stach.v3.Table.SplitResult',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='multi_level_headers_table_reference', full_name='factset.protobuf.stach.v3.Table.SplitResult.multi_level_headers_table_reference', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=590,
  serialized_end=648,
)

_TABLE_CUSTOMMETADATAENTRY = _descriptor.Descriptor(
  name='CustomMetadataEntry',
  full_name='factset.protobuf.stach.v3.Table.CustomMetadataEntry',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='key', full_name='factset.protobuf.stach.v3.Table.CustomMetadataEntry.key', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='value', full_name='factset.protobuf.stach.v3.Table.CustomMetadataEntry.value', index=1,
      number=2, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=b'8\001',
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=650,
  serialized_end=744,
)

_TABLE = _descriptor.Descriptor(
  name='Table',
  full_name='factset.protobuf.stach.v3.Table',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='primary_keys', full_name='factset.protobuf.stach.v3.Table.primary_keys', index=0,
      number=1, type=9, cpp_type=9, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='total_num_rows', full_name='factset.protobuf.stach.v3.Table.total_num_rows', index=1,
      number=2, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='group_result', full_name='factset.protobuf.stach.v3.Table.group_result', index=2,
      number=3, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='split_result', full_name='factset.protobuf.stach.v3.Table.split_result', index=3,
      number=4, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='custom_metadata', full_name='factset.protobuf.stach.v3.Table.custom_metadata', index=4,
      number=100, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[_TABLE_GROUPRESULT, _TABLE_COLLAPSEDCOLUMNRESULT, _TABLE_SPLITRESULT, _TABLE_CUSTOMMETADATAENTRY, ],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=107,
  serialized_end=744,
)

_TABLE_GROUPRESULT.fields_by_name['collapsed_column_result'].message_type = _TABLE_COLLAPSEDCOLUMNRESULT
_TABLE_GROUPRESULT.containing_type = _TABLE
_TABLE_COLLAPSEDCOLUMNRESULT.containing_type = _TABLE
_TABLE_SPLITRESULT.containing_type = _TABLE
_TABLE_CUSTOMMETADATAENTRY.fields_by_name['value'].message_type = fds_dot_protobuf_dot_stach_dot_v3_dot_MetadataItem__pb2._METADATAITEM
_TABLE_CUSTOMMETADATAENTRY.containing_type = _TABLE
_TABLE.fields_by_name['group_result'].message_type = _TABLE_GROUPRESULT
_TABLE.fields_by_name['split_result'].message_type = _TABLE_SPLITRESULT
_TABLE.fields_by_name['custom_metadata'].message_type = _TABLE_CUSTOMMETADATAENTRY
DESCRIPTOR.message_types_by_name['Table'] = _TABLE
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

Table = _reflection.GeneratedProtocolMessageType('Table', (_message.Message,), {

  'GroupResult' : _reflection.GeneratedProtocolMessageType('GroupResult', (_message.Message,), {
    'DESCRIPTOR' : _TABLE_GROUPRESULT,
    '__module__' : 'fds.protobuf.stach.v3.Table_pb2'
    # @@protoc_insertion_point(class_scope:factset.protobuf.stach.v3.Table.GroupResult)
    })
  ,

  'CollapsedColumnResult' : _reflection.GeneratedProtocolMessageType('CollapsedColumnResult', (_message.Message,), {
    'DESCRIPTOR' : _TABLE_COLLAPSEDCOLUMNRESULT,
    '__module__' : 'fds.protobuf.stach.v3.Table_pb2'
    # @@protoc_insertion_point(class_scope:factset.protobuf.stach.v3.Table.CollapsedColumnResult)
    })
  ,

  'SplitResult' : _reflection.GeneratedProtocolMessageType('SplitResult', (_message.Message,), {
    'DESCRIPTOR' : _TABLE_SPLITRESULT,
    '__module__' : 'fds.protobuf.stach.v3.Table_pb2'
    # @@protoc_insertion_point(class_scope:factset.protobuf.stach.v3.Table.SplitResult)
    })
  ,

  'CustomMetadataEntry' : _reflection.GeneratedProtocolMessageType('CustomMetadataEntry', (_message.Message,), {
    'DESCRIPTOR' : _TABLE_CUSTOMMETADATAENTRY,
    '__module__' : 'fds.protobuf.stach.v3.Table_pb2'
    # @@protoc_insertion_point(class_scope:factset.protobuf.stach.v3.Table.CustomMetadataEntry)
    })
  ,
  'DESCRIPTOR' : _TABLE,
  '__module__' : 'fds.protobuf.stach.v3.Table_pb2'
  # @@protoc_insertion_point(class_scope:factset.protobuf.stach.v3.Table)
  })
_sym_db.RegisterMessage(Table)
_sym_db.RegisterMessage(Table.GroupResult)
_sym_db.RegisterMessage(Table.CollapsedColumnResult)
_sym_db.RegisterMessage(Table.SplitResult)
_sym_db.RegisterMessage(Table.CustomMetadataEntry)


DESCRIPTOR._options = None
_TABLE_CUSTOMMETADATAENTRY._options = None
# @@protoc_insertion_point(module_scope)

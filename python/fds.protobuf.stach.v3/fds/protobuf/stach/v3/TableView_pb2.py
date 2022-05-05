# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: fds/protobuf/stach/v3/TableView.proto

from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from fds.protobuf.stach.v3 import MetadataItem_pb2 as fds_dot_protobuf_dot_stach_dot_v3_dot_MetadataItem__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='fds/protobuf/stach/v3/TableView.proto',
  package='factset.protobuf.stach.v3',
  syntax='proto3',
  serialized_options=b'\n\035com.factset.protobuf.stach.v3B\016TableViewProtoZ<github.com/factset/stachschema-sdks/go/fds/protobuf/stach/v3\252\002\031FactSet.Protobuf.Stach.V3',
  create_key=_descriptor._internal_create_key,
  serialized_pb=b'\n%fds/protobuf/stach/v3/TableView.proto\x12\x19\x66\x61\x63tset.protobuf.stach.v3\x1a(fds/protobuf/stach/v3/MetadataItem.proto\"\xb8\x06\n\tTableView\x12\x14\n\x0c\x64isplay_name\x18\x01 \x01(\t\x12\x0f\n\x07\x63olumns\x18\x02 \x03(\t\x12\x42\n\x07headers\x18\x03 \x03(\x0b\x32\x31.factset.protobuf.stach.v3.TableView.HeadersEntry\x12\x39\n\x05group\x18\x04 \x01(\x0b\x32*.factset.protobuf.stach.v3.TableView.Group\x12\x39\n\x05split\x18\x05 \x01(\x0b\x32*.factset.protobuf.stach.v3.TableView.Split\x12Q\n\x0f\x63ustom_metadata\x18\x64 \x03(\x0b\x32\x38.factset.protobuf.stach.v3.TableView.CustomMetadataEntry\x1a\x63\n\x05Group\x12\n\n\x02\x62y\x18\x01 \x03(\t\x12N\n\x10\x63ollapsed_column\x18\x02 \x01(\x0b\x32\x34.factset.protobuf.stach.v3.TableView.CollapsedColumn\x1a \n\x0f\x43ollapsedColumn\x12\r\n\x05\x61lias\x18\x01 \x01(\t\x1a\xdf\x01\n\x05Split\x12\r\n\x05\x61lias\x18\x01 \x01(\t\x12\n\n\x02\x62y\x18\x02 \x03(\t\x12\x0f\n\x07include\x18\x03 \x03(\t\x12\x0c\n\x04over\x18\x04 \x03(\t\x12H\n\x07headers\x18\x05 \x03(\x0b\x32\x37.factset.protobuf.stach.v3.TableView.Split.HeadersEntry\x12\"\n\x1aremove_empty_split_columns\x18\x06 \x01(\x08\x1a.\n\x0cHeadersEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\t:\x02\x38\x01\x1a.\n\x0cHeadersEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\t:\x02\x38\x01\x1a^\n\x13\x43ustomMetadataEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\x36\n\x05value\x18\x02 \x01(\x0b\x32\'.factset.protobuf.stach.v3.MetadataItem:\x02\x38\x01\x42\x89\x01\n\x1d\x63om.factset.protobuf.stach.v3B\x0eTableViewProtoZ<github.com/factset/stachschema-sdks/go/fds/protobuf/stach/v3\xaa\x02\x19\x46\x61\x63tSet.Protobuf.Stach.V3b\x06proto3'
  ,
  dependencies=[fds_dot_protobuf_dot_stach_dot_v3_dot_MetadataItem__pb2.DESCRIPTOR,])




_TABLEVIEW_GROUP = _descriptor.Descriptor(
  name='Group',
  full_name='factset.protobuf.stach.v3.TableView.Group',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='by', full_name='factset.protobuf.stach.v3.TableView.Group.by', index=0,
      number=1, type=9, cpp_type=9, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='collapsed_column', full_name='factset.protobuf.stach.v3.TableView.Group.collapsed_column', index=1,
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
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=432,
  serialized_end=531,
)

_TABLEVIEW_COLLAPSEDCOLUMN = _descriptor.Descriptor(
  name='CollapsedColumn',
  full_name='factset.protobuf.stach.v3.TableView.CollapsedColumn',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='alias', full_name='factset.protobuf.stach.v3.TableView.CollapsedColumn.alias', index=0,
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
  serialized_start=533,
  serialized_end=565,
)

_TABLEVIEW_SPLIT_HEADERSENTRY = _descriptor.Descriptor(
  name='HeadersEntry',
  full_name='factset.protobuf.stach.v3.TableView.Split.HeadersEntry',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='key', full_name='factset.protobuf.stach.v3.TableView.Split.HeadersEntry.key', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='value', full_name='factset.protobuf.stach.v3.TableView.Split.HeadersEntry.value', index=1,
      number=2, type=9, cpp_type=9, label=1,
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
  serialized_options=b'8\001',
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=745,
  serialized_end=791,
)

_TABLEVIEW_SPLIT = _descriptor.Descriptor(
  name='Split',
  full_name='factset.protobuf.stach.v3.TableView.Split',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='alias', full_name='factset.protobuf.stach.v3.TableView.Split.alias', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='by', full_name='factset.protobuf.stach.v3.TableView.Split.by', index=1,
      number=2, type=9, cpp_type=9, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='include', full_name='factset.protobuf.stach.v3.TableView.Split.include', index=2,
      number=3, type=9, cpp_type=9, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='over', full_name='factset.protobuf.stach.v3.TableView.Split.over', index=3,
      number=4, type=9, cpp_type=9, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='headers', full_name='factset.protobuf.stach.v3.TableView.Split.headers', index=4,
      number=5, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='remove_empty_split_columns', full_name='factset.protobuf.stach.v3.TableView.Split.remove_empty_split_columns', index=5,
      number=6, type=8, cpp_type=7, label=1,
      has_default_value=False, default_value=False,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[_TABLEVIEW_SPLIT_HEADERSENTRY, ],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=568,
  serialized_end=791,
)

_TABLEVIEW_HEADERSENTRY = _descriptor.Descriptor(
  name='HeadersEntry',
  full_name='factset.protobuf.stach.v3.TableView.HeadersEntry',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='key', full_name='factset.protobuf.stach.v3.TableView.HeadersEntry.key', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='value', full_name='factset.protobuf.stach.v3.TableView.HeadersEntry.value', index=1,
      number=2, type=9, cpp_type=9, label=1,
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
  serialized_options=b'8\001',
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=745,
  serialized_end=791,
)

_TABLEVIEW_CUSTOMMETADATAENTRY = _descriptor.Descriptor(
  name='CustomMetadataEntry',
  full_name='factset.protobuf.stach.v3.TableView.CustomMetadataEntry',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='key', full_name='factset.protobuf.stach.v3.TableView.CustomMetadataEntry.key', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='value', full_name='factset.protobuf.stach.v3.TableView.CustomMetadataEntry.value', index=1,
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
  serialized_start=841,
  serialized_end=935,
)

_TABLEVIEW = _descriptor.Descriptor(
  name='TableView',
  full_name='factset.protobuf.stach.v3.TableView',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='display_name', full_name='factset.protobuf.stach.v3.TableView.display_name', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='columns', full_name='factset.protobuf.stach.v3.TableView.columns', index=1,
      number=2, type=9, cpp_type=9, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='headers', full_name='factset.protobuf.stach.v3.TableView.headers', index=2,
      number=3, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='group', full_name='factset.protobuf.stach.v3.TableView.group', index=3,
      number=4, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='split', full_name='factset.protobuf.stach.v3.TableView.split', index=4,
      number=5, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='custom_metadata', full_name='factset.protobuf.stach.v3.TableView.custom_metadata', index=5,
      number=100, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[_TABLEVIEW_GROUP, _TABLEVIEW_COLLAPSEDCOLUMN, _TABLEVIEW_SPLIT, _TABLEVIEW_HEADERSENTRY, _TABLEVIEW_CUSTOMMETADATAENTRY, ],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=111,
  serialized_end=935,
)

_TABLEVIEW_GROUP.fields_by_name['collapsed_column'].message_type = _TABLEVIEW_COLLAPSEDCOLUMN
_TABLEVIEW_GROUP.containing_type = _TABLEVIEW
_TABLEVIEW_COLLAPSEDCOLUMN.containing_type = _TABLEVIEW
_TABLEVIEW_SPLIT_HEADERSENTRY.containing_type = _TABLEVIEW_SPLIT
_TABLEVIEW_SPLIT.fields_by_name['headers'].message_type = _TABLEVIEW_SPLIT_HEADERSENTRY
_TABLEVIEW_SPLIT.containing_type = _TABLEVIEW
_TABLEVIEW_HEADERSENTRY.containing_type = _TABLEVIEW
_TABLEVIEW_CUSTOMMETADATAENTRY.fields_by_name['value'].message_type = fds_dot_protobuf_dot_stach_dot_v3_dot_MetadataItem__pb2._METADATAITEM
_TABLEVIEW_CUSTOMMETADATAENTRY.containing_type = _TABLEVIEW
_TABLEVIEW.fields_by_name['headers'].message_type = _TABLEVIEW_HEADERSENTRY
_TABLEVIEW.fields_by_name['group'].message_type = _TABLEVIEW_GROUP
_TABLEVIEW.fields_by_name['split'].message_type = _TABLEVIEW_SPLIT
_TABLEVIEW.fields_by_name['custom_metadata'].message_type = _TABLEVIEW_CUSTOMMETADATAENTRY
DESCRIPTOR.message_types_by_name['TableView'] = _TABLEVIEW
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

TableView = _reflection.GeneratedProtocolMessageType('TableView', (_message.Message,), {

  'Group' : _reflection.GeneratedProtocolMessageType('Group', (_message.Message,), {
    'DESCRIPTOR' : _TABLEVIEW_GROUP,
    '__module__' : 'fds.protobuf.stach.v3.TableView_pb2'
    # @@protoc_insertion_point(class_scope:factset.protobuf.stach.v3.TableView.Group)
    })
  ,

  'CollapsedColumn' : _reflection.GeneratedProtocolMessageType('CollapsedColumn', (_message.Message,), {
    'DESCRIPTOR' : _TABLEVIEW_COLLAPSEDCOLUMN,
    '__module__' : 'fds.protobuf.stach.v3.TableView_pb2'
    # @@protoc_insertion_point(class_scope:factset.protobuf.stach.v3.TableView.CollapsedColumn)
    })
  ,

  'Split' : _reflection.GeneratedProtocolMessageType('Split', (_message.Message,), {

    'HeadersEntry' : _reflection.GeneratedProtocolMessageType('HeadersEntry', (_message.Message,), {
      'DESCRIPTOR' : _TABLEVIEW_SPLIT_HEADERSENTRY,
      '__module__' : 'fds.protobuf.stach.v3.TableView_pb2'
      # @@protoc_insertion_point(class_scope:factset.protobuf.stach.v3.TableView.Split.HeadersEntry)
      })
    ,
    'DESCRIPTOR' : _TABLEVIEW_SPLIT,
    '__module__' : 'fds.protobuf.stach.v3.TableView_pb2'
    # @@protoc_insertion_point(class_scope:factset.protobuf.stach.v3.TableView.Split)
    })
  ,

  'HeadersEntry' : _reflection.GeneratedProtocolMessageType('HeadersEntry', (_message.Message,), {
    'DESCRIPTOR' : _TABLEVIEW_HEADERSENTRY,
    '__module__' : 'fds.protobuf.stach.v3.TableView_pb2'
    # @@protoc_insertion_point(class_scope:factset.protobuf.stach.v3.TableView.HeadersEntry)
    })
  ,

  'CustomMetadataEntry' : _reflection.GeneratedProtocolMessageType('CustomMetadataEntry', (_message.Message,), {
    'DESCRIPTOR' : _TABLEVIEW_CUSTOMMETADATAENTRY,
    '__module__' : 'fds.protobuf.stach.v3.TableView_pb2'
    # @@protoc_insertion_point(class_scope:factset.protobuf.stach.v3.TableView.CustomMetadataEntry)
    })
  ,
  'DESCRIPTOR' : _TABLEVIEW,
  '__module__' : 'fds.protobuf.stach.v3.TableView_pb2'
  # @@protoc_insertion_point(class_scope:factset.protobuf.stach.v3.TableView)
  })
_sym_db.RegisterMessage(TableView)
_sym_db.RegisterMessage(TableView.Group)
_sym_db.RegisterMessage(TableView.CollapsedColumn)
_sym_db.RegisterMessage(TableView.Split)
_sym_db.RegisterMessage(TableView.Split.HeadersEntry)
_sym_db.RegisterMessage(TableView.HeadersEntry)
_sym_db.RegisterMessage(TableView.CustomMetadataEntry)


DESCRIPTOR._options = None
_TABLEVIEW_SPLIT_HEADERSENTRY._options = None
_TABLEVIEW_HEADERSENTRY._options = None
_TABLEVIEW_CUSTOMMETADATAENTRY._options = None
# @@protoc_insertion_point(module_scope)

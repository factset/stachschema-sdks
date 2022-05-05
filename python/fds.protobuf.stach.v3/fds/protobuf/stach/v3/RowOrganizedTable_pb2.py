# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: fds/protobuf/stach/v3/RowOrganizedTable.proto

from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from fds.protobuf.stach.v3 import MetadataItem_pb2 as fds_dot_protobuf_dot_stach_dot_v3_dot_MetadataItem__pb2
from fds.protobuf.stach.v3 import Table_pb2 as fds_dot_protobuf_dot_stach_dot_v3_dot_Table__pb2
from fds.protobuf.stach.v3 import Views_pb2 as fds_dot_protobuf_dot_stach_dot_v3_dot_Views__pb2
from google.protobuf import struct_pb2 as google_dot_protobuf_dot_struct__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='fds/protobuf/stach/v3/RowOrganizedTable.proto',
  package='factset.protobuf.stach.v3',
  syntax='proto3',
  serialized_options=b'\n\035com.factset.protobuf.stach.v3B\026RowOrganizedTableProtoZ<github.com/factset/stachschema-sdks/go/fds/protobuf/stach/v3\252\002\031FactSet.Protobuf.Stach.V3',
  create_key=_descriptor._internal_create_key,
  serialized_pb=b'\n-fds/protobuf/stach/v3/RowOrganizedTable.proto\x12\x19\x66\x61\x63tset.protobuf.stach.v3\x1a(fds/protobuf/stach/v3/MetadataItem.proto\x1a!fds/protobuf/stach/v3/Table.proto\x1a!fds/protobuf/stach/v3/Views.proto\x1a\x1cgoogle/protobuf/struct.proto\"\xda\x06\n\x11RowOrganizedTable\x12\x0f\n\x07version\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\x12\x44\n\x07\x63olumns\x18\x03 \x03(\x0b\x32\x33.factset.protobuf.stach.v3.RowOrganizedTable.Column\x12/\n\x05table\x18\x04 \x01(\x0b\x32 .factset.protobuf.stach.v3.Table\x12O\n\x19multi_level_headers_table\x18\x05 \x01(\x0b\x32,.factset.protobuf.stach.v3.RowOrganizedTable\x12\x34\n\x05views\x18\x06 \x03(\x0b\x32%.factset.protobuf.stach.v3.Views.View\x12K\n\x0bheader_rows\x18\x07 \x03(\x0b\x32\x36.factset.protobuf.stach.v3.RowOrganizedTable.HeaderRow\x12%\n\x04rows\x18\x08 \x03(\x0b\x32\x17.google.protobuf.Struct\x1a\x87\x02\n\x06\x43olumn\x12\x0c\n\x04name\x18\x01 \x01(\t\x12\x14\n\x0c\x66orbid_nulls\x18\x02 \x01(\x08\x12\x17\n\x0f\x63ontextual_type\x18\x03 \x01(\t\x12`\n\x0f\x63ustom_metadata\x18\x64 \x03(\x0b\x32G.factset.protobuf.stach.v3.RowOrganizedTable.Column.CustomMetadataEntry\x1a^\n\x13\x43ustomMetadataEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\x36\n\x05value\x18\x02 \x01(\x0b\x32\'.factset.protobuf.stach.v3.MetadataItem:\x02\x38\x01\x1aS\n\tHeaderRow\x12\x46\n\x05\x63\x65lls\x18\x01 \x03(\x0b\x32\x37.factset.protobuf.stach.v3.RowOrganizedTable.HeaderCell\x1aU\n\nHeaderCell\x12\x0f\n\x07\x63olspan\x18\x01 \x01(\r\x12\x0f\n\x07rowspan\x18\x02 \x01(\r\x12%\n\x05value\x18\x03 \x01(\x0b\x32\x16.google.protobuf.ValueB\x91\x01\n\x1d\x63om.factset.protobuf.stach.v3B\x16RowOrganizedTableProtoZ<github.com/factset/stachschema-sdks/go/fds/protobuf/stach/v3\xaa\x02\x19\x46\x61\x63tSet.Protobuf.Stach.V3b\x06proto3'
  ,
  dependencies=[fds_dot_protobuf_dot_stach_dot_v3_dot_MetadataItem__pb2.DESCRIPTOR,fds_dot_protobuf_dot_stach_dot_v3_dot_Table__pb2.DESCRIPTOR,fds_dot_protobuf_dot_stach_dot_v3_dot_Views__pb2.DESCRIPTOR,google_dot_protobuf_dot_struct__pb2.DESCRIPTOR,])




_ROWORGANIZEDTABLE_COLUMN_CUSTOMMETADATAENTRY = _descriptor.Descriptor(
  name='CustomMetadataEntry',
  full_name='factset.protobuf.stach.v3.RowOrganizedTable.Column.CustomMetadataEntry',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='key', full_name='factset.protobuf.stach.v3.RowOrganizedTable.Column.CustomMetadataEntry.key', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='value', full_name='factset.protobuf.stach.v3.RowOrganizedTable.Column.CustomMetadataEntry.value', index=1,
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
  serialized_start=811,
  serialized_end=905,
)

_ROWORGANIZEDTABLE_COLUMN = _descriptor.Descriptor(
  name='Column',
  full_name='factset.protobuf.stach.v3.RowOrganizedTable.Column',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='name', full_name='factset.protobuf.stach.v3.RowOrganizedTable.Column.name', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='forbid_nulls', full_name='factset.protobuf.stach.v3.RowOrganizedTable.Column.forbid_nulls', index=1,
      number=2, type=8, cpp_type=7, label=1,
      has_default_value=False, default_value=False,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='contextual_type', full_name='factset.protobuf.stach.v3.RowOrganizedTable.Column.contextual_type', index=2,
      number=3, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='custom_metadata', full_name='factset.protobuf.stach.v3.RowOrganizedTable.Column.custom_metadata', index=3,
      number=100, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[_ROWORGANIZEDTABLE_COLUMN_CUSTOMMETADATAENTRY, ],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=642,
  serialized_end=905,
)

_ROWORGANIZEDTABLE_HEADERROW = _descriptor.Descriptor(
  name='HeaderRow',
  full_name='factset.protobuf.stach.v3.RowOrganizedTable.HeaderRow',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='cells', full_name='factset.protobuf.stach.v3.RowOrganizedTable.HeaderRow.cells', index=0,
      number=1, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
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
  serialized_start=907,
  serialized_end=990,
)

_ROWORGANIZEDTABLE_HEADERCELL = _descriptor.Descriptor(
  name='HeaderCell',
  full_name='factset.protobuf.stach.v3.RowOrganizedTable.HeaderCell',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='colspan', full_name='factset.protobuf.stach.v3.RowOrganizedTable.HeaderCell.colspan', index=0,
      number=1, type=13, cpp_type=3, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='rowspan', full_name='factset.protobuf.stach.v3.RowOrganizedTable.HeaderCell.rowspan', index=1,
      number=2, type=13, cpp_type=3, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='value', full_name='factset.protobuf.stach.v3.RowOrganizedTable.HeaderCell.value', index=2,
      number=3, type=11, cpp_type=10, label=1,
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
  serialized_start=992,
  serialized_end=1077,
)

_ROWORGANIZEDTABLE = _descriptor.Descriptor(
  name='RowOrganizedTable',
  full_name='factset.protobuf.stach.v3.RowOrganizedTable',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='version', full_name='factset.protobuf.stach.v3.RowOrganizedTable.version', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='name', full_name='factset.protobuf.stach.v3.RowOrganizedTable.name', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='columns', full_name='factset.protobuf.stach.v3.RowOrganizedTable.columns', index=2,
      number=3, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='table', full_name='factset.protobuf.stach.v3.RowOrganizedTable.table', index=3,
      number=4, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='multi_level_headers_table', full_name='factset.protobuf.stach.v3.RowOrganizedTable.multi_level_headers_table', index=4,
      number=5, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='views', full_name='factset.protobuf.stach.v3.RowOrganizedTable.views', index=5,
      number=6, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='header_rows', full_name='factset.protobuf.stach.v3.RowOrganizedTable.header_rows', index=6,
      number=7, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='rows', full_name='factset.protobuf.stach.v3.RowOrganizedTable.rows', index=7,
      number=8, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[_ROWORGANIZEDTABLE_COLUMN, _ROWORGANIZEDTABLE_HEADERROW, _ROWORGANIZEDTABLE_HEADERCELL, ],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=219,
  serialized_end=1077,
)

_ROWORGANIZEDTABLE_COLUMN_CUSTOMMETADATAENTRY.fields_by_name['value'].message_type = fds_dot_protobuf_dot_stach_dot_v3_dot_MetadataItem__pb2._METADATAITEM
_ROWORGANIZEDTABLE_COLUMN_CUSTOMMETADATAENTRY.containing_type = _ROWORGANIZEDTABLE_COLUMN
_ROWORGANIZEDTABLE_COLUMN.fields_by_name['custom_metadata'].message_type = _ROWORGANIZEDTABLE_COLUMN_CUSTOMMETADATAENTRY
_ROWORGANIZEDTABLE_COLUMN.containing_type = _ROWORGANIZEDTABLE
_ROWORGANIZEDTABLE_HEADERROW.fields_by_name['cells'].message_type = _ROWORGANIZEDTABLE_HEADERCELL
_ROWORGANIZEDTABLE_HEADERROW.containing_type = _ROWORGANIZEDTABLE
_ROWORGANIZEDTABLE_HEADERCELL.fields_by_name['value'].message_type = google_dot_protobuf_dot_struct__pb2._VALUE
_ROWORGANIZEDTABLE_HEADERCELL.containing_type = _ROWORGANIZEDTABLE
_ROWORGANIZEDTABLE.fields_by_name['columns'].message_type = _ROWORGANIZEDTABLE_COLUMN
_ROWORGANIZEDTABLE.fields_by_name['table'].message_type = fds_dot_protobuf_dot_stach_dot_v3_dot_Table__pb2._TABLE
_ROWORGANIZEDTABLE.fields_by_name['multi_level_headers_table'].message_type = _ROWORGANIZEDTABLE
_ROWORGANIZEDTABLE.fields_by_name['views'].message_type = fds_dot_protobuf_dot_stach_dot_v3_dot_Views__pb2._VIEWS_VIEW
_ROWORGANIZEDTABLE.fields_by_name['header_rows'].message_type = _ROWORGANIZEDTABLE_HEADERROW
_ROWORGANIZEDTABLE.fields_by_name['rows'].message_type = google_dot_protobuf_dot_struct__pb2._STRUCT
DESCRIPTOR.message_types_by_name['RowOrganizedTable'] = _ROWORGANIZEDTABLE
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

RowOrganizedTable = _reflection.GeneratedProtocolMessageType('RowOrganizedTable', (_message.Message,), {

  'Column' : _reflection.GeneratedProtocolMessageType('Column', (_message.Message,), {

    'CustomMetadataEntry' : _reflection.GeneratedProtocolMessageType('CustomMetadataEntry', (_message.Message,), {
      'DESCRIPTOR' : _ROWORGANIZEDTABLE_COLUMN_CUSTOMMETADATAENTRY,
      '__module__' : 'fds.protobuf.stach.v3.RowOrganizedTable_pb2'
      # @@protoc_insertion_point(class_scope:factset.protobuf.stach.v3.RowOrganizedTable.Column.CustomMetadataEntry)
      })
    ,
    'DESCRIPTOR' : _ROWORGANIZEDTABLE_COLUMN,
    '__module__' : 'fds.protobuf.stach.v3.RowOrganizedTable_pb2'
    # @@protoc_insertion_point(class_scope:factset.protobuf.stach.v3.RowOrganizedTable.Column)
    })
  ,

  'HeaderRow' : _reflection.GeneratedProtocolMessageType('HeaderRow', (_message.Message,), {
    'DESCRIPTOR' : _ROWORGANIZEDTABLE_HEADERROW,
    '__module__' : 'fds.protobuf.stach.v3.RowOrganizedTable_pb2'
    # @@protoc_insertion_point(class_scope:factset.protobuf.stach.v3.RowOrganizedTable.HeaderRow)
    })
  ,

  'HeaderCell' : _reflection.GeneratedProtocolMessageType('HeaderCell', (_message.Message,), {
    'DESCRIPTOR' : _ROWORGANIZEDTABLE_HEADERCELL,
    '__module__' : 'fds.protobuf.stach.v3.RowOrganizedTable_pb2'
    # @@protoc_insertion_point(class_scope:factset.protobuf.stach.v3.RowOrganizedTable.HeaderCell)
    })
  ,
  'DESCRIPTOR' : _ROWORGANIZEDTABLE,
  '__module__' : 'fds.protobuf.stach.v3.RowOrganizedTable_pb2'
  # @@protoc_insertion_point(class_scope:factset.protobuf.stach.v3.RowOrganizedTable)
  })
_sym_db.RegisterMessage(RowOrganizedTable)
_sym_db.RegisterMessage(RowOrganizedTable.Column)
_sym_db.RegisterMessage(RowOrganizedTable.Column.CustomMetadataEntry)
_sym_db.RegisterMessage(RowOrganizedTable.HeaderRow)
_sym_db.RegisterMessage(RowOrganizedTable.HeaderCell)


DESCRIPTOR._options = None
_ROWORGANIZEDTABLE_COLUMN_CUSTOMMETADATAENTRY._options = None
# @@protoc_insertion_point(module_scope)

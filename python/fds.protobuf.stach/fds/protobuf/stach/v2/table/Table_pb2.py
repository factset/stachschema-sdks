# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: fds/protobuf/stach/v2/table/Table.proto

from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from fds.protobuf.stach.v2.table import TableData_pb2 as fds_dot_protobuf_dot_stach_dot_v2_dot_table_dot_TableData__pb2
from fds.protobuf.stach.v2.table import TableDefinition_pb2 as fds_dot_protobuf_dot_stach_dot_v2_dot_table_dot_TableDefinition__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='fds/protobuf/stach/v2/table/Table.proto',
  package='factset.protobuf.stach.v2.table',
  syntax='proto3',
  serialized_options=b'\n#com.factset.protobuf.stach.v2.tableB\nTableProtoZ=github.com/factset/stachschema/go/fds/protobuf/stach/v2/table\252\002\037FactSet.Protobuf.Stach.V2.Table',
  create_key=_descriptor._internal_create_key,
  serialized_pb=b'\n\'fds/protobuf/stach/v2/table/Table.proto\x12\x1f\x66\x61\x63tset.protobuf.stach.v2.table\x1a+fds/protobuf/stach/v2/table/TableData.proto\x1a\x31\x66\x64s/protobuf/stach/v2/table/TableDefinition.proto\"\x87\x01\n\x05Table\x12\x44\n\ndefinition\x18\x01 \x01(\x0b\x32\x30.factset.protobuf.stach.v2.table.TableDefinition\x12\x38\n\x04\x64\x61ta\x18\x02 \x01(\x0b\x32*.factset.protobuf.stach.v2.table.TableDataB\x92\x01\n#com.factset.protobuf.stach.v2.tableB\nTableProtoZ=github.com/factset/stachschema/go/fds/protobuf/stach/v2/table\xaa\x02\x1f\x46\x61\x63tSet.Protobuf.Stach.V2.Tableb\x06proto3'
  ,
  dependencies=[fds_dot_protobuf_dot_stach_dot_v2_dot_table_dot_TableData__pb2.DESCRIPTOR,fds_dot_protobuf_dot_stach_dot_v2_dot_table_dot_TableDefinition__pb2.DESCRIPTOR,])




_TABLE = _descriptor.Descriptor(
  name='Table',
  full_name='factset.protobuf.stach.v2.table.Table',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='definition', full_name='factset.protobuf.stach.v2.table.Table.definition', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='data', full_name='factset.protobuf.stach.v2.table.Table.data', index=1,
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
  serialized_start=173,
  serialized_end=308,
)

_TABLE.fields_by_name['definition'].message_type = fds_dot_protobuf_dot_stach_dot_v2_dot_table_dot_TableDefinition__pb2._TABLEDEFINITION
_TABLE.fields_by_name['data'].message_type = fds_dot_protobuf_dot_stach_dot_v2_dot_table_dot_TableData__pb2._TABLEDATA
DESCRIPTOR.message_types_by_name['Table'] = _TABLE
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

Table = _reflection.GeneratedProtocolMessageType('Table', (_message.Message,), {
  'DESCRIPTOR' : _TABLE,
  '__module__' : 'fds.protobuf.stach.v2.table.Table_pb2'
  # @@protoc_insertion_point(class_scope:factset.protobuf.stach.v2.table.Table)
  })
_sym_db.RegisterMessage(Table)


DESCRIPTOR._options = None
# @@protoc_insertion_point(module_scope)

# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: fds/protobuf/stach/v2/table/CellDefinition.proto

from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from fds.protobuf.stach.v2.table import DataFormat_pb2 as fds_dot_protobuf_dot_stach_dot_v2_dot_table_dot_DataFormat__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='fds/protobuf/stach/v2/table/CellDefinition.proto',
  package='factset.protobuf.stach.v2.table',
  syntax='proto3',
  serialized_options=b'\n#com.factset.protobuf.stach.v2.tableB\023CellDefinitionProtoZ=github.com/factset/stachschema/go/fds/protobuf/stach/v2/table\252\002\037FactSet.Protobuf.Stach.V2.Table',
  create_key=_descriptor._internal_create_key,
  serialized_pb=b'\n0fds/protobuf/stach/v2/table/CellDefinition.proto\x12\x1f\x66\x61\x63tset.protobuf.stach.v2.table\x1a,fds/protobuf/stach/v2/table/DataFormat.proto\"[\n\x0e\x43\x65llDefinition\x12\x0c\n\x04type\x18\x01 \x01(\t\x12;\n\x06\x66ormat\x18\x02 \x01(\x0b\x32+.factset.protobuf.stach.v2.table.DataFormatB\x9b\x01\n#com.factset.protobuf.stach.v2.tableB\x13\x43\x65llDefinitionProtoZ=github.com/factset/stachschema/go/fds/protobuf/stach/v2/table\xaa\x02\x1f\x46\x61\x63tSet.Protobuf.Stach.V2.Tableb\x06proto3'
  ,
  dependencies=[fds_dot_protobuf_dot_stach_dot_v2_dot_table_dot_DataFormat__pb2.DESCRIPTOR,])




_CELLDEFINITION = _descriptor.Descriptor(
  name='CellDefinition',
  full_name='factset.protobuf.stach.v2.table.CellDefinition',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='type', full_name='factset.protobuf.stach.v2.table.CellDefinition.type', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='format', full_name='factset.protobuf.stach.v2.table.CellDefinition.format', index=1,
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
  serialized_start=131,
  serialized_end=222,
)

_CELLDEFINITION.fields_by_name['format'].message_type = fds_dot_protobuf_dot_stach_dot_v2_dot_table_dot_DataFormat__pb2._DATAFORMAT
DESCRIPTOR.message_types_by_name['CellDefinition'] = _CELLDEFINITION
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

CellDefinition = _reflection.GeneratedProtocolMessageType('CellDefinition', (_message.Message,), {
  'DESCRIPTOR' : _CELLDEFINITION,
  '__module__' : 'fds.protobuf.stach.v2.table.CellDefinition_pb2'
  # @@protoc_insertion_point(class_scope:factset.protobuf.stach.v2.table.CellDefinition)
  })
_sym_db.RegisterMessage(CellDefinition)


DESCRIPTOR._options = None
# @@protoc_insertion_point(module_scope)

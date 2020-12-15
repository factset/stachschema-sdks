# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: fds/protobuf/stach/v2/table/Reference.proto

from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from fds.protobuf.stach.v2.table import ReferenceType_pb2 as fds_dot_protobuf_dot_stach_dot_v2_dot_table_dot_ReferenceType__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='fds/protobuf/stach/v2/table/Reference.proto',
  package='factset.protobuf.stach.v2.table',
  syntax='proto3',
  serialized_options=b'\n#com.factset.protobuf.stach.v2.tableB\016ReferenceProtoZBgithub.com/factset/stachschema-sdks/go/fds/protobuf/stach/v2/table\252\002\037FactSet.Protobuf.Stach.V2.Table',
  create_key=_descriptor._internal_create_key,
  serialized_pb=b'\n+fds/protobuf/stach/v2/table/Reference.proto\x12\x1f\x66\x61\x63tset.protobuf.stach.v2.table\x1a/fds/protobuf/stach/v2/table/ReferenceType.proto\"\x88\x01\n\tReference\x12\x46\n\x0ereference_type\x18\x01 \x01(\x0e\x32..factset.protobuf.stach.v2.table.ReferenceType\x12\x10\n\x08table_id\x18\x02 \x01(\t\x12\x11\n\tcolumn_id\x18\x03 \x01(\t\x12\x0e\n\x06row_id\x18\x04 \x01(\tB\x9b\x01\n#com.factset.protobuf.stach.v2.tableB\x0eReferenceProtoZBgithub.com/factset/stachschema-sdks/go/fds/protobuf/stach/v2/table\xaa\x02\x1f\x46\x61\x63tSet.Protobuf.Stach.V2.Tableb\x06proto3'
  ,
  dependencies=[fds_dot_protobuf_dot_stach_dot_v2_dot_table_dot_ReferenceType__pb2.DESCRIPTOR,])




_REFERENCE = _descriptor.Descriptor(
  name='Reference',
  full_name='factset.protobuf.stach.v2.table.Reference',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='reference_type', full_name='factset.protobuf.stach.v2.table.Reference.reference_type', index=0,
      number=1, type=14, cpp_type=8, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='table_id', full_name='factset.protobuf.stach.v2.table.Reference.table_id', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='column_id', full_name='factset.protobuf.stach.v2.table.Reference.column_id', index=2,
      number=3, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='row_id', full_name='factset.protobuf.stach.v2.table.Reference.row_id', index=3,
      number=4, type=9, cpp_type=9, label=1,
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
  serialized_start=130,
  serialized_end=266,
)

_REFERENCE.fields_by_name['reference_type'].enum_type = fds_dot_protobuf_dot_stach_dot_v2_dot_table_dot_ReferenceType__pb2._REFERENCETYPE
DESCRIPTOR.message_types_by_name['Reference'] = _REFERENCE
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

Reference = _reflection.GeneratedProtocolMessageType('Reference', (_message.Message,), {
  'DESCRIPTOR' : _REFERENCE,
  '__module__' : 'fds.protobuf.stach.v2.table.Reference_pb2'
  # @@protoc_insertion_point(class_scope:factset.protobuf.stach.v2.table.Reference)
  })
_sym_db.RegisterMessage(Reference)


DESCRIPTOR._options = None
# @@protoc_insertion_point(module_scope)

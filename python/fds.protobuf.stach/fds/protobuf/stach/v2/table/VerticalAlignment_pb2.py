# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: fds/protobuf/stach/v2/table/VerticalAlignment.proto

from google.protobuf.internal import enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor.FileDescriptor(
  name='fds/protobuf/stach/v2/table/VerticalAlignment.proto',
  package='factset.protobuf.stach.v2.table',
  syntax='proto3',
  serialized_options=b'\n#com.factset.protobuf.stach.v2.tableB\026VerticalAlignmentProtoZ=github.com/factset/stachschema/go/fds/protobuf/stach/v2/table\252\002\037FactSet.Protobuf.Stach.V2.Table',
  create_key=_descriptor._internal_create_key,
  serialized_pb=b'\n3fds/protobuf/stach/v2/table/VerticalAlignment.proto\x12\x1f\x66\x61\x63tset.protobuf.stach.v2.table*H\n\x11VerticalAlignment\x12\x12\n\x0eUNKNOWN_VALIGN\x10\x00\x12\x07\n\x03TOP\x10\x01\x12\n\n\x06MIDDLE\x10\x02\x12\n\n\x06\x42OTTOM\x10\x03\x42\x9e\x01\n#com.factset.protobuf.stach.v2.tableB\x16VerticalAlignmentProtoZ=github.com/factset/stachschema/go/fds/protobuf/stach/v2/table\xaa\x02\x1f\x46\x61\x63tSet.Protobuf.Stach.V2.Tableb\x06proto3'
)

_VERTICALALIGNMENT = _descriptor.EnumDescriptor(
  name='VerticalAlignment',
  full_name='factset.protobuf.stach.v2.table.VerticalAlignment',
  filename=None,
  file=DESCRIPTOR,
  create_key=_descriptor._internal_create_key,
  values=[
    _descriptor.EnumValueDescriptor(
      name='UNKNOWN_VALIGN', index=0, number=0,
      serialized_options=None,
      type=None,
      create_key=_descriptor._internal_create_key),
    _descriptor.EnumValueDescriptor(
      name='TOP', index=1, number=1,
      serialized_options=None,
      type=None,
      create_key=_descriptor._internal_create_key),
    _descriptor.EnumValueDescriptor(
      name='MIDDLE', index=2, number=2,
      serialized_options=None,
      type=None,
      create_key=_descriptor._internal_create_key),
    _descriptor.EnumValueDescriptor(
      name='BOTTOM', index=3, number=3,
      serialized_options=None,
      type=None,
      create_key=_descriptor._internal_create_key),
  ],
  containing_type=None,
  serialized_options=None,
  serialized_start=88,
  serialized_end=160,
)
_sym_db.RegisterEnumDescriptor(_VERTICALALIGNMENT)

VerticalAlignment = enum_type_wrapper.EnumTypeWrapper(_VERTICALALIGNMENT)
UNKNOWN_VALIGN = 0
TOP = 1
MIDDLE = 2
BOTTOM = 3


DESCRIPTOR.enum_types_by_name['VerticalAlignment'] = _VERTICALALIGNMENT
_sym_db.RegisterFileDescriptor(DESCRIPTOR)


DESCRIPTOR._options = None
# @@protoc_insertion_point(module_scope)
# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: fds/protobuf/stach/v3/TableView.proto
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from fds.protobuf.stach.v3 import MetadataItem_pb2 as fds_dot_protobuf_dot_stach_dot_v3_dot_MetadataItem__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n%fds/protobuf/stach/v3/TableView.proto\x12\x19\x66\x61\x63tset.protobuf.stach.v3\x1a(fds/protobuf/stach/v3/MetadataItem.proto\"\xb8\x06\n\tTableView\x12\x14\n\x0c\x64isplay_name\x18\x01 \x01(\t\x12\x0f\n\x07\x63olumns\x18\x02 \x03(\t\x12\x42\n\x07headers\x18\x03 \x03(\x0b\x32\x31.factset.protobuf.stach.v3.TableView.HeadersEntry\x12\x39\n\x05group\x18\x04 \x01(\x0b\x32*.factset.protobuf.stach.v3.TableView.Group\x12\x39\n\x05split\x18\x05 \x01(\x0b\x32*.factset.protobuf.stach.v3.TableView.Split\x12Q\n\x0f\x63ustom_metadata\x18\x64 \x03(\x0b\x32\x38.factset.protobuf.stach.v3.TableView.CustomMetadataEntry\x1a\x63\n\x05Group\x12\n\n\x02\x62y\x18\x01 \x03(\t\x12N\n\x10\x63ollapsed_column\x18\x02 \x01(\x0b\x32\x34.factset.protobuf.stach.v3.TableView.CollapsedColumn\x1a \n\x0f\x43ollapsedColumn\x12\r\n\x05\x61lias\x18\x01 \x01(\t\x1a\xdf\x01\n\x05Split\x12\r\n\x05\x61lias\x18\x01 \x01(\t\x12\n\n\x02\x62y\x18\x02 \x03(\t\x12\x0f\n\x07include\x18\x03 \x03(\t\x12\x0c\n\x04over\x18\x04 \x03(\t\x12H\n\x07headers\x18\x05 \x03(\x0b\x32\x37.factset.protobuf.stach.v3.TableView.Split.HeadersEntry\x12\"\n\x1aremove_empty_split_columns\x18\x06 \x01(\x08\x1a.\n\x0cHeadersEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\t:\x02\x38\x01\x1a.\n\x0cHeadersEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\t:\x02\x38\x01\x1a^\n\x13\x43ustomMetadataEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\x36\n\x05value\x18\x02 \x01(\x0b\x32\'.factset.protobuf.stach.v3.MetadataItem:\x02\x38\x01\x42\x89\x01\n\x1d\x63om.factset.protobuf.stach.v3B\x0eTableViewProtoZ<github.com/factset/stachschema-sdks/go/fds/protobuf/stach/v3\xaa\x02\x19\x46\x61\x63tSet.Protobuf.Stach.V3b\x06proto3')



_TABLEVIEW = DESCRIPTOR.message_types_by_name['TableView']
_TABLEVIEW_GROUP = _TABLEVIEW.nested_types_by_name['Group']
_TABLEVIEW_COLLAPSEDCOLUMN = _TABLEVIEW.nested_types_by_name['CollapsedColumn']
_TABLEVIEW_SPLIT = _TABLEVIEW.nested_types_by_name['Split']
_TABLEVIEW_SPLIT_HEADERSENTRY = _TABLEVIEW_SPLIT.nested_types_by_name['HeadersEntry']
_TABLEVIEW_HEADERSENTRY = _TABLEVIEW.nested_types_by_name['HeadersEntry']
_TABLEVIEW_CUSTOMMETADATAENTRY = _TABLEVIEW.nested_types_by_name['CustomMetadataEntry']
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

if _descriptor._USE_C_DESCRIPTORS == False:

  DESCRIPTOR._options = None
  DESCRIPTOR._serialized_options = b'\n\035com.factset.protobuf.stach.v3B\016TableViewProtoZ<github.com/factset/stachschema-sdks/go/fds/protobuf/stach/v3\252\002\031FactSet.Protobuf.Stach.V3'
  _TABLEVIEW_SPLIT_HEADERSENTRY._options = None
  _TABLEVIEW_SPLIT_HEADERSENTRY._serialized_options = b'8\001'
  _TABLEVIEW_HEADERSENTRY._options = None
  _TABLEVIEW_HEADERSENTRY._serialized_options = b'8\001'
  _TABLEVIEW_CUSTOMMETADATAENTRY._options = None
  _TABLEVIEW_CUSTOMMETADATAENTRY._serialized_options = b'8\001'
  _TABLEVIEW._serialized_start=111
  _TABLEVIEW._serialized_end=935
  _TABLEVIEW_GROUP._serialized_start=432
  _TABLEVIEW_GROUP._serialized_end=531
  _TABLEVIEW_COLLAPSEDCOLUMN._serialized_start=533
  _TABLEVIEW_COLLAPSEDCOLUMN._serialized_end=565
  _TABLEVIEW_SPLIT._serialized_start=568
  _TABLEVIEW_SPLIT._serialized_end=791
  _TABLEVIEW_SPLIT_HEADERSENTRY._serialized_start=745
  _TABLEVIEW_SPLIT_HEADERSENTRY._serialized_end=791
  _TABLEVIEW_HEADERSENTRY._serialized_start=745
  _TABLEVIEW_HEADERSENTRY._serialized_end=791
  _TABLEVIEW_CUSTOMMETADATAENTRY._serialized_start=841
  _TABLEVIEW_CUSTOMMETADATAENTRY._serialized_end=935
# @@protoc_insertion_point(module_scope)

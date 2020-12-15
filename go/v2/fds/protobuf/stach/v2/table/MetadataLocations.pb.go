// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.25.0-devel
// 	protoc        v3.12.3
// source: fds/protobuf/stach/v2/table/MetadataLocations.proto

package table

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

// The metadata locations for a table
type MetadataLocations struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// The array (metadata item id) of metadata items associated with the whole table
	Table []string `protobuf:"bytes,1,rep,name=table,proto3" json:"table,omitempty"`
	// The map (key: column id) of all metadata items associated with a column
	Columns map[string]*ListOfMetadata `protobuf:"bytes,2,rep,name=columns,proto3" json:"columns,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
	// The map (key: row id) of all metadata items associated with a row
	Rows map[string]*ListOfMetadata `protobuf:"bytes,3,rep,name=rows,proto3" json:"rows,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
	// The metadata items associated with specific cells
	Cells *MetadataLocations_CellsColumnMap `protobuf:"bytes,4,opt,name=cells,proto3" json:"cells,omitempty"`
}

func (x *MetadataLocations) Reset() {
	*x = MetadataLocations{}
	if protoimpl.UnsafeEnabled {
		mi := &file_fds_protobuf_stach_v2_table_MetadataLocations_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *MetadataLocations) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*MetadataLocations) ProtoMessage() {}

func (x *MetadataLocations) ProtoReflect() protoreflect.Message {
	mi := &file_fds_protobuf_stach_v2_table_MetadataLocations_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use MetadataLocations.ProtoReflect.Descriptor instead.
func (*MetadataLocations) Descriptor() ([]byte, []int) {
	return file_fds_protobuf_stach_v2_table_MetadataLocations_proto_rawDescGZIP(), []int{0}
}

func (x *MetadataLocations) GetTable() []string {
	if x != nil {
		return x.Table
	}
	return nil
}

func (x *MetadataLocations) GetColumns() map[string]*ListOfMetadata {
	if x != nil {
		return x.Columns
	}
	return nil
}

func (x *MetadataLocations) GetRows() map[string]*ListOfMetadata {
	if x != nil {
		return x.Rows
	}
	return nil
}

func (x *MetadataLocations) GetCells() *MetadataLocations_CellsColumnMap {
	if x != nil {
		return x.Cells
	}
	return nil
}

// A message wrapper for a map of columns to `CellsRowMap`
type MetadataLocations_CellsColumnMap struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// The map (key: column id) of columns to `CellsRowMap`
	Columns map[string]*MetadataLocations_CellsRowMap `protobuf:"bytes,1,rep,name=columns,proto3" json:"columns,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
}

func (x *MetadataLocations_CellsColumnMap) Reset() {
	*x = MetadataLocations_CellsColumnMap{}
	if protoimpl.UnsafeEnabled {
		mi := &file_fds_protobuf_stach_v2_table_MetadataLocations_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *MetadataLocations_CellsColumnMap) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*MetadataLocations_CellsColumnMap) ProtoMessage() {}

func (x *MetadataLocations_CellsColumnMap) ProtoReflect() protoreflect.Message {
	mi := &file_fds_protobuf_stach_v2_table_MetadataLocations_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use MetadataLocations_CellsColumnMap.ProtoReflect.Descriptor instead.
func (*MetadataLocations_CellsColumnMap) Descriptor() ([]byte, []int) {
	return file_fds_protobuf_stach_v2_table_MetadataLocations_proto_rawDescGZIP(), []int{0, 0}
}

func (x *MetadataLocations_CellsColumnMap) GetColumns() map[string]*MetadataLocations_CellsRowMap {
	if x != nil {
		return x.Columns
	}
	return nil
}

// A message wrapper for a map of rows to a list of metadata
type MetadataLocations_CellsRowMap struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// The map (key: row id) of rows to a list of metadata
	Rows map[string]*ListOfMetadata `protobuf:"bytes,1,rep,name=rows,proto3" json:"rows,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
}

func (x *MetadataLocations_CellsRowMap) Reset() {
	*x = MetadataLocations_CellsRowMap{}
	if protoimpl.UnsafeEnabled {
		mi := &file_fds_protobuf_stach_v2_table_MetadataLocations_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *MetadataLocations_CellsRowMap) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*MetadataLocations_CellsRowMap) ProtoMessage() {}

func (x *MetadataLocations_CellsRowMap) ProtoReflect() protoreflect.Message {
	mi := &file_fds_protobuf_stach_v2_table_MetadataLocations_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use MetadataLocations_CellsRowMap.ProtoReflect.Descriptor instead.
func (*MetadataLocations_CellsRowMap) Descriptor() ([]byte, []int) {
	return file_fds_protobuf_stach_v2_table_MetadataLocations_proto_rawDescGZIP(), []int{0, 1}
}

func (x *MetadataLocations_CellsRowMap) GetRows() map[string]*ListOfMetadata {
	if x != nil {
		return x.Rows
	}
	return nil
}

var File_fds_protobuf_stach_v2_table_MetadataLocations_proto protoreflect.FileDescriptor

var file_fds_protobuf_stach_v2_table_MetadataLocations_proto_rawDesc = []byte{
	0x0a, 0x33, 0x66, 0x64, 0x73, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f, 0x73,
	0x74, 0x61, 0x63, 0x68, 0x2f, 0x76, 0x32, 0x2f, 0x74, 0x61, 0x62, 0x6c, 0x65, 0x2f, 0x4d, 0x65,
	0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x4c, 0x6f, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x1f, 0x66, 0x61, 0x63, 0x74, 0x73, 0x65, 0x74, 0x2e, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x73, 0x74, 0x61, 0x63, 0x68, 0x2e, 0x76, 0x32,
	0x2e, 0x74, 0x61, 0x62, 0x6c, 0x65, 0x1a, 0x30, 0x66, 0x64, 0x73, 0x2f, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x62, 0x75, 0x66, 0x2f, 0x73, 0x74, 0x61, 0x63, 0x68, 0x2f, 0x76, 0x32, 0x2f, 0x74, 0x61,
	0x62, 0x6c, 0x65, 0x2f, 0x4c, 0x69, 0x73, 0x74, 0x4f, 0x66, 0x4d, 0x65, 0x74, 0x61, 0x64, 0x61,
	0x74, 0x61, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0xd7, 0x07, 0x0a, 0x11, 0x4d, 0x65, 0x74,
	0x61, 0x64, 0x61, 0x74, 0x61, 0x4c, 0x6f, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x12, 0x14,
	0x0a, 0x05, 0x74, 0x61, 0x62, 0x6c, 0x65, 0x18, 0x01, 0x20, 0x03, 0x28, 0x09, 0x52, 0x05, 0x74,
	0x61, 0x62, 0x6c, 0x65, 0x12, 0x59, 0x0a, 0x07, 0x63, 0x6f, 0x6c, 0x75, 0x6d, 0x6e, 0x73, 0x18,
	0x02, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x3f, 0x2e, 0x66, 0x61, 0x63, 0x74, 0x73, 0x65, 0x74, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x73, 0x74, 0x61, 0x63, 0x68, 0x2e, 0x76,
	0x32, 0x2e, 0x74, 0x61, 0x62, 0x6c, 0x65, 0x2e, 0x4d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61,
	0x4c, 0x6f, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x2e, 0x43, 0x6f, 0x6c, 0x75, 0x6d, 0x6e,
	0x73, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x52, 0x07, 0x63, 0x6f, 0x6c, 0x75, 0x6d, 0x6e, 0x73, 0x12,
	0x50, 0x0a, 0x04, 0x72, 0x6f, 0x77, 0x73, 0x18, 0x03, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x3c, 0x2e,
	0x66, 0x61, 0x63, 0x74, 0x73, 0x65, 0x74, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66,
	0x2e, 0x73, 0x74, 0x61, 0x63, 0x68, 0x2e, 0x76, 0x32, 0x2e, 0x74, 0x61, 0x62, 0x6c, 0x65, 0x2e,
	0x4d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x4c, 0x6f, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e,
	0x73, 0x2e, 0x52, 0x6f, 0x77, 0x73, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x52, 0x04, 0x72, 0x6f, 0x77,
	0x73, 0x12, 0x57, 0x0a, 0x05, 0x63, 0x65, 0x6c, 0x6c, 0x73, 0x18, 0x04, 0x20, 0x01, 0x28, 0x0b,
	0x32, 0x41, 0x2e, 0x66, 0x61, 0x63, 0x74, 0x73, 0x65, 0x74, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x62, 0x75, 0x66, 0x2e, 0x73, 0x74, 0x61, 0x63, 0x68, 0x2e, 0x76, 0x32, 0x2e, 0x74, 0x61, 0x62,
	0x6c, 0x65, 0x2e, 0x4d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x4c, 0x6f, 0x63, 0x61, 0x74,
	0x69, 0x6f, 0x6e, 0x73, 0x2e, 0x43, 0x65, 0x6c, 0x6c, 0x73, 0x43, 0x6f, 0x6c, 0x75, 0x6d, 0x6e,
	0x4d, 0x61, 0x70, 0x52, 0x05, 0x63, 0x65, 0x6c, 0x6c, 0x73, 0x1a, 0xf6, 0x01, 0x0a, 0x0e, 0x43,
	0x65, 0x6c, 0x6c, 0x73, 0x43, 0x6f, 0x6c, 0x75, 0x6d, 0x6e, 0x4d, 0x61, 0x70, 0x12, 0x68, 0x0a,
	0x07, 0x63, 0x6f, 0x6c, 0x75, 0x6d, 0x6e, 0x73, 0x18, 0x01, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x4e,
	0x2e, 0x66, 0x61, 0x63, 0x74, 0x73, 0x65, 0x74, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75,
	0x66, 0x2e, 0x73, 0x74, 0x61, 0x63, 0x68, 0x2e, 0x76, 0x32, 0x2e, 0x74, 0x61, 0x62, 0x6c, 0x65,
	0x2e, 0x4d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x4c, 0x6f, 0x63, 0x61, 0x74, 0x69, 0x6f,
	0x6e, 0x73, 0x2e, 0x43, 0x65, 0x6c, 0x6c, 0x73, 0x43, 0x6f, 0x6c, 0x75, 0x6d, 0x6e, 0x4d, 0x61,
	0x70, 0x2e, 0x43, 0x6f, 0x6c, 0x75, 0x6d, 0x6e, 0x73, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x52, 0x07,
	0x63, 0x6f, 0x6c, 0x75, 0x6d, 0x6e, 0x73, 0x1a, 0x7a, 0x0a, 0x0c, 0x43, 0x6f, 0x6c, 0x75, 0x6d,
	0x6e, 0x73, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x12, 0x10, 0x0a, 0x03, 0x6b, 0x65, 0x79, 0x18, 0x01,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x03, 0x6b, 0x65, 0x79, 0x12, 0x54, 0x0a, 0x05, 0x76, 0x61, 0x6c,
	0x75, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x3e, 0x2e, 0x66, 0x61, 0x63, 0x74, 0x73,
	0x65, 0x74, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x73, 0x74, 0x61, 0x63,
	0x68, 0x2e, 0x76, 0x32, 0x2e, 0x74, 0x61, 0x62, 0x6c, 0x65, 0x2e, 0x4d, 0x65, 0x74, 0x61, 0x64,
	0x61, 0x74, 0x61, 0x4c, 0x6f, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x2e, 0x43, 0x65, 0x6c,
	0x6c, 0x73, 0x52, 0x6f, 0x77, 0x4d, 0x61, 0x70, 0x52, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x3a,
	0x02, 0x38, 0x01, 0x1a, 0xd5, 0x01, 0x0a, 0x0b, 0x43, 0x65, 0x6c, 0x6c, 0x73, 0x52, 0x6f, 0x77,
	0x4d, 0x61, 0x70, 0x12, 0x5c, 0x0a, 0x04, 0x72, 0x6f, 0x77, 0x73, 0x18, 0x01, 0x20, 0x03, 0x28,
	0x0b, 0x32, 0x48, 0x2e, 0x66, 0x61, 0x63, 0x74, 0x73, 0x65, 0x74, 0x2e, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x62, 0x75, 0x66, 0x2e, 0x73, 0x74, 0x61, 0x63, 0x68, 0x2e, 0x76, 0x32, 0x2e, 0x74, 0x61,
	0x62, 0x6c, 0x65, 0x2e, 0x4d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x4c, 0x6f, 0x63, 0x61,
	0x74, 0x69, 0x6f, 0x6e, 0x73, 0x2e, 0x43, 0x65, 0x6c, 0x6c, 0x73, 0x52, 0x6f, 0x77, 0x4d, 0x61,
	0x70, 0x2e, 0x52, 0x6f, 0x77, 0x73, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x52, 0x04, 0x72, 0x6f, 0x77,
	0x73, 0x1a, 0x68, 0x0a, 0x09, 0x52, 0x6f, 0x77, 0x73, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x12, 0x10,
	0x0a, 0x03, 0x6b, 0x65, 0x79, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x03, 0x6b, 0x65, 0x79,
	0x12, 0x45, 0x0a, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32,
	0x2f, 0x2e, 0x66, 0x61, 0x63, 0x74, 0x73, 0x65, 0x74, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62,
	0x75, 0x66, 0x2e, 0x73, 0x74, 0x61, 0x63, 0x68, 0x2e, 0x76, 0x32, 0x2e, 0x74, 0x61, 0x62, 0x6c,
	0x65, 0x2e, 0x4c, 0x69, 0x73, 0x74, 0x4f, 0x66, 0x4d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61,
	0x52, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x3a, 0x02, 0x38, 0x01, 0x1a, 0x6b, 0x0a, 0x0c, 0x43,
	0x6f, 0x6c, 0x75, 0x6d, 0x6e, 0x73, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x12, 0x10, 0x0a, 0x03, 0x6b,
	0x65, 0x79, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x03, 0x6b, 0x65, 0x79, 0x12, 0x45, 0x0a,
	0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x2f, 0x2e, 0x66,
	0x61, 0x63, 0x74, 0x73, 0x65, 0x74, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e,
	0x73, 0x74, 0x61, 0x63, 0x68, 0x2e, 0x76, 0x32, 0x2e, 0x74, 0x61, 0x62, 0x6c, 0x65, 0x2e, 0x4c,
	0x69, 0x73, 0x74, 0x4f, 0x66, 0x4d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x52, 0x05, 0x76,
	0x61, 0x6c, 0x75, 0x65, 0x3a, 0x02, 0x38, 0x01, 0x1a, 0x68, 0x0a, 0x09, 0x52, 0x6f, 0x77, 0x73,
	0x45, 0x6e, 0x74, 0x72, 0x79, 0x12, 0x10, 0x0a, 0x03, 0x6b, 0x65, 0x79, 0x18, 0x01, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x03, 0x6b, 0x65, 0x79, 0x12, 0x45, 0x0a, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65,
	0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x2f, 0x2e, 0x66, 0x61, 0x63, 0x74, 0x73, 0x65, 0x74,
	0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x73, 0x74, 0x61, 0x63, 0x68, 0x2e,
	0x76, 0x32, 0x2e, 0x74, 0x61, 0x62, 0x6c, 0x65, 0x2e, 0x4c, 0x69, 0x73, 0x74, 0x4f, 0x66, 0x4d,
	0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x52, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x3a, 0x02,
	0x38, 0x01, 0x42, 0xa3, 0x01, 0x0a, 0x23, 0x63, 0x6f, 0x6d, 0x2e, 0x66, 0x61, 0x63, 0x74, 0x73,
	0x65, 0x74, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x73, 0x74, 0x61, 0x63,
	0x68, 0x2e, 0x76, 0x32, 0x2e, 0x74, 0x61, 0x62, 0x6c, 0x65, 0x42, 0x16, 0x4d, 0x65, 0x74, 0x61,
	0x64, 0x61, 0x74, 0x61, 0x4c, 0x6f, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x50, 0x72, 0x6f,
	0x74, 0x6f, 0x5a, 0x42, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x66,
	0x61, 0x63, 0x74, 0x73, 0x65, 0x74, 0x2f, 0x73, 0x74, 0x61, 0x63, 0x68, 0x73, 0x63, 0x68, 0x65,
	0x6d, 0x61, 0x2d, 0x73, 0x64, 0x6b, 0x73, 0x2f, 0x67, 0x6f, 0x2f, 0x66, 0x64, 0x73, 0x2f, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f, 0x73, 0x74, 0x61, 0x63, 0x68, 0x2f, 0x76, 0x32,
	0x2f, 0x74, 0x61, 0x62, 0x6c, 0x65, 0xaa, 0x02, 0x1f, 0x46, 0x61, 0x63, 0x74, 0x53, 0x65, 0x74,
	0x2e, 0x50, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x53, 0x74, 0x61, 0x63, 0x68, 0x2e,
	0x56, 0x32, 0x2e, 0x54, 0x61, 0x62, 0x6c, 0x65, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_fds_protobuf_stach_v2_table_MetadataLocations_proto_rawDescOnce sync.Once
	file_fds_protobuf_stach_v2_table_MetadataLocations_proto_rawDescData = file_fds_protobuf_stach_v2_table_MetadataLocations_proto_rawDesc
)

func file_fds_protobuf_stach_v2_table_MetadataLocations_proto_rawDescGZIP() []byte {
	file_fds_protobuf_stach_v2_table_MetadataLocations_proto_rawDescOnce.Do(func() {
		file_fds_protobuf_stach_v2_table_MetadataLocations_proto_rawDescData = protoimpl.X.CompressGZIP(file_fds_protobuf_stach_v2_table_MetadataLocations_proto_rawDescData)
	})
	return file_fds_protobuf_stach_v2_table_MetadataLocations_proto_rawDescData
}

var file_fds_protobuf_stach_v2_table_MetadataLocations_proto_msgTypes = make([]protoimpl.MessageInfo, 7)
var file_fds_protobuf_stach_v2_table_MetadataLocations_proto_goTypes = []interface{}{
	(*MetadataLocations)(nil),                // 0: factset.protobuf.stach.v2.table.MetadataLocations
	(*MetadataLocations_CellsColumnMap)(nil), // 1: factset.protobuf.stach.v2.table.MetadataLocations.CellsColumnMap
	(*MetadataLocations_CellsRowMap)(nil),    // 2: factset.protobuf.stach.v2.table.MetadataLocations.CellsRowMap
	nil,                                      // 3: factset.protobuf.stach.v2.table.MetadataLocations.ColumnsEntry
	nil,                                      // 4: factset.protobuf.stach.v2.table.MetadataLocations.RowsEntry
	nil,                                      // 5: factset.protobuf.stach.v2.table.MetadataLocations.CellsColumnMap.ColumnsEntry
	nil,                                      // 6: factset.protobuf.stach.v2.table.MetadataLocations.CellsRowMap.RowsEntry
	(*ListOfMetadata)(nil),                   // 7: factset.protobuf.stach.v2.table.ListOfMetadata
}
var file_fds_protobuf_stach_v2_table_MetadataLocations_proto_depIdxs = []int32{
	3, // 0: factset.protobuf.stach.v2.table.MetadataLocations.columns:type_name -> factset.protobuf.stach.v2.table.MetadataLocations.ColumnsEntry
	4, // 1: factset.protobuf.stach.v2.table.MetadataLocations.rows:type_name -> factset.protobuf.stach.v2.table.MetadataLocations.RowsEntry
	1, // 2: factset.protobuf.stach.v2.table.MetadataLocations.cells:type_name -> factset.protobuf.stach.v2.table.MetadataLocations.CellsColumnMap
	5, // 3: factset.protobuf.stach.v2.table.MetadataLocations.CellsColumnMap.columns:type_name -> factset.protobuf.stach.v2.table.MetadataLocations.CellsColumnMap.ColumnsEntry
	6, // 4: factset.protobuf.stach.v2.table.MetadataLocations.CellsRowMap.rows:type_name -> factset.protobuf.stach.v2.table.MetadataLocations.CellsRowMap.RowsEntry
	7, // 5: factset.protobuf.stach.v2.table.MetadataLocations.ColumnsEntry.value:type_name -> factset.protobuf.stach.v2.table.ListOfMetadata
	7, // 6: factset.protobuf.stach.v2.table.MetadataLocations.RowsEntry.value:type_name -> factset.protobuf.stach.v2.table.ListOfMetadata
	2, // 7: factset.protobuf.stach.v2.table.MetadataLocations.CellsColumnMap.ColumnsEntry.value:type_name -> factset.protobuf.stach.v2.table.MetadataLocations.CellsRowMap
	7, // 8: factset.protobuf.stach.v2.table.MetadataLocations.CellsRowMap.RowsEntry.value:type_name -> factset.protobuf.stach.v2.table.ListOfMetadata
	9, // [9:9] is the sub-list for method output_type
	9, // [9:9] is the sub-list for method input_type
	9, // [9:9] is the sub-list for extension type_name
	9, // [9:9] is the sub-list for extension extendee
	0, // [0:9] is the sub-list for field type_name
}

func init() { file_fds_protobuf_stach_v2_table_MetadataLocations_proto_init() }
func file_fds_protobuf_stach_v2_table_MetadataLocations_proto_init() {
	if File_fds_protobuf_stach_v2_table_MetadataLocations_proto != nil {
		return
	}
	file_fds_protobuf_stach_v2_table_ListOfMetadata_proto_init()
	if !protoimpl.UnsafeEnabled {
		file_fds_protobuf_stach_v2_table_MetadataLocations_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*MetadataLocations); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_fds_protobuf_stach_v2_table_MetadataLocations_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*MetadataLocations_CellsColumnMap); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_fds_protobuf_stach_v2_table_MetadataLocations_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*MetadataLocations_CellsRowMap); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_fds_protobuf_stach_v2_table_MetadataLocations_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   7,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_fds_protobuf_stach_v2_table_MetadataLocations_proto_goTypes,
		DependencyIndexes: file_fds_protobuf_stach_v2_table_MetadataLocations_proto_depIdxs,
		MessageInfos:      file_fds_protobuf_stach_v2_table_MetadataLocations_proto_msgTypes,
	}.Build()
	File_fds_protobuf_stach_v2_table_MetadataLocations_proto = out.File
	file_fds_protobuf_stach_v2_table_MetadataLocations_proto_rawDesc = nil
	file_fds_protobuf_stach_v2_table_MetadataLocations_proto_goTypes = nil
	file_fds_protobuf_stach_v2_table_MetadataLocations_proto_depIdxs = nil
}

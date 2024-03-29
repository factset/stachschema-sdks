// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.0-devel
// 	protoc        v3.19.4
// source: fds/protobuf/stach/v3/RowOrganizedTable.proto

package v3

import (
	_struct "github.com/golang/protobuf/ptypes/struct"
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

//
//A row-organized table.
//Used for JSON-encoding a table.
type RowOrganizedTable struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	//
	//The version of the schema.
	//Required.
	Version string `protobuf:"bytes,1,opt,name=version,proto3" json:"version,omitempty"`
	//
	//The name of the table.
	//Optional.
	Name string `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
	//
	//The columns that define this table.
	//Required.
	Columns []*RowOrganizedTable_Column `protobuf:"bytes,3,rep,name=columns,proto3" json:"columns,omitempty"`
	//
	//The primary table metadata.
	//Required.
	Table *Table `protobuf:"bytes,4,opt,name=table,proto3" json:"table,omitempty"`
	//
	//The multi-level headers table.
	//Optional.
	MultiLevelHeadersTable *RowOrganizedTable `protobuf:"bytes,5,opt,name=multi_level_headers_table,json=multiLevelHeadersTable,proto3" json:"multi_level_headers_table,omitempty"`
	//
	//The views metadata.
	//Optional.
	Views []*Views_View `protobuf:"bytes,6,rep,name=views,proto3" json:"views,omitempty"`
	//
	//The header rows.
	//Optional.
	HeaderRows []*RowOrganizedTable_HeaderRow `protobuf:"bytes,7,rep,name=header_rows,json=headerRows,proto3" json:"header_rows,omitempty"`
	//
	//The rows.
	//Required.
	Rows []*_struct.Struct `protobuf:"bytes,8,rep,name=rows,proto3" json:"rows,omitempty"`
}

func (x *RowOrganizedTable) Reset() {
	*x = RowOrganizedTable{}
	if protoimpl.UnsafeEnabled {
		mi := &file_fds_protobuf_stach_v3_RowOrganizedTable_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *RowOrganizedTable) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*RowOrganizedTable) ProtoMessage() {}

func (x *RowOrganizedTable) ProtoReflect() protoreflect.Message {
	mi := &file_fds_protobuf_stach_v3_RowOrganizedTable_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use RowOrganizedTable.ProtoReflect.Descriptor instead.
func (*RowOrganizedTable) Descriptor() ([]byte, []int) {
	return file_fds_protobuf_stach_v3_RowOrganizedTable_proto_rawDescGZIP(), []int{0}
}

func (x *RowOrganizedTable) GetVersion() string {
	if x != nil {
		return x.Version
	}
	return ""
}

func (x *RowOrganizedTable) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *RowOrganizedTable) GetColumns() []*RowOrganizedTable_Column {
	if x != nil {
		return x.Columns
	}
	return nil
}

func (x *RowOrganizedTable) GetTable() *Table {
	if x != nil {
		return x.Table
	}
	return nil
}

func (x *RowOrganizedTable) GetMultiLevelHeadersTable() *RowOrganizedTable {
	if x != nil {
		return x.MultiLevelHeadersTable
	}
	return nil
}

func (x *RowOrganizedTable) GetViews() []*Views_View {
	if x != nil {
		return x.Views
	}
	return nil
}

func (x *RowOrganizedTable) GetHeaderRows() []*RowOrganizedTable_HeaderRow {
	if x != nil {
		return x.HeaderRows
	}
	return nil
}

func (x *RowOrganizedTable) GetRows() []*_struct.Struct {
	if x != nil {
		return x.Rows
	}
	return nil
}

//
//A row-organized column.
type RowOrganizedTable_Column struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	//
	//The name of the column.
	//Required.
	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	//
	//Whether the column can contains NULLs or not.
	//Default is `false`.
	//Required.
	ForbidNulls bool `protobuf:"varint,2,opt,name=forbid_nulls,json=forbidNulls,proto3" json:"forbid_nulls,omitempty"`
	//
	//The contextual type.
	//Required.
	ContextualType string `protobuf:"bytes,3,opt,name=contextual_type,json=contextualType,proto3" json:"contextual_type,omitempty"`
	//
	//The custom metadata.
	//Optional.
	CustomMetadata map[string]*MetadataItem `protobuf:"bytes,100,rep,name=custom_metadata,json=customMetadata,proto3" json:"custom_metadata,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
}

func (x *RowOrganizedTable_Column) Reset() {
	*x = RowOrganizedTable_Column{}
	if protoimpl.UnsafeEnabled {
		mi := &file_fds_protobuf_stach_v3_RowOrganizedTable_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *RowOrganizedTable_Column) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*RowOrganizedTable_Column) ProtoMessage() {}

func (x *RowOrganizedTable_Column) ProtoReflect() protoreflect.Message {
	mi := &file_fds_protobuf_stach_v3_RowOrganizedTable_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use RowOrganizedTable_Column.ProtoReflect.Descriptor instead.
func (*RowOrganizedTable_Column) Descriptor() ([]byte, []int) {
	return file_fds_protobuf_stach_v3_RowOrganizedTable_proto_rawDescGZIP(), []int{0, 0}
}

func (x *RowOrganizedTable_Column) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *RowOrganizedTable_Column) GetForbidNulls() bool {
	if x != nil {
		return x.ForbidNulls
	}
	return false
}

func (x *RowOrganizedTable_Column) GetContextualType() string {
	if x != nil {
		return x.ContextualType
	}
	return ""
}

func (x *RowOrganizedTable_Column) GetCustomMetadata() map[string]*MetadataItem {
	if x != nil {
		return x.CustomMetadata
	}
	return nil
}

//
//A row-organized header row.
type RowOrganizedTable_HeaderRow struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	//
	//The header row cells.
	//Required.
	Cells []*RowOrganizedTable_HeaderCell `protobuf:"bytes,1,rep,name=cells,proto3" json:"cells,omitempty"`
}

func (x *RowOrganizedTable_HeaderRow) Reset() {
	*x = RowOrganizedTable_HeaderRow{}
	if protoimpl.UnsafeEnabled {
		mi := &file_fds_protobuf_stach_v3_RowOrganizedTable_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *RowOrganizedTable_HeaderRow) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*RowOrganizedTable_HeaderRow) ProtoMessage() {}

func (x *RowOrganizedTable_HeaderRow) ProtoReflect() protoreflect.Message {
	mi := &file_fds_protobuf_stach_v3_RowOrganizedTable_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use RowOrganizedTable_HeaderRow.ProtoReflect.Descriptor instead.
func (*RowOrganizedTable_HeaderRow) Descriptor() ([]byte, []int) {
	return file_fds_protobuf_stach_v3_RowOrganizedTable_proto_rawDescGZIP(), []int{0, 1}
}

func (x *RowOrganizedTable_HeaderRow) GetCells() []*RowOrganizedTable_HeaderCell {
	if x != nil {
		return x.Cells
	}
	return nil
}

//
//A row-organized header cell.
type RowOrganizedTable_HeaderCell struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	//
	//The column span.
	//Default is `0`. A zero is treated as a one.
	//Optional.
	Colspan uint32 `protobuf:"varint,1,opt,name=colspan,proto3" json:"colspan,omitempty"`
	//
	//The row span.
	//Default is `0`. A zero is treated as a one.
	//Optional.
	Rowspan uint32 `protobuf:"varint,2,opt,name=rowspan,proto3" json:"rowspan,omitempty"`
	//
	//The cell's value.
	//Optional.
	Value *_struct.Value `protobuf:"bytes,3,opt,name=value,proto3" json:"value,omitempty"`
}

func (x *RowOrganizedTable_HeaderCell) Reset() {
	*x = RowOrganizedTable_HeaderCell{}
	if protoimpl.UnsafeEnabled {
		mi := &file_fds_protobuf_stach_v3_RowOrganizedTable_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *RowOrganizedTable_HeaderCell) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*RowOrganizedTable_HeaderCell) ProtoMessage() {}

func (x *RowOrganizedTable_HeaderCell) ProtoReflect() protoreflect.Message {
	mi := &file_fds_protobuf_stach_v3_RowOrganizedTable_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use RowOrganizedTable_HeaderCell.ProtoReflect.Descriptor instead.
func (*RowOrganizedTable_HeaderCell) Descriptor() ([]byte, []int) {
	return file_fds_protobuf_stach_v3_RowOrganizedTable_proto_rawDescGZIP(), []int{0, 2}
}

func (x *RowOrganizedTable_HeaderCell) GetColspan() uint32 {
	if x != nil {
		return x.Colspan
	}
	return 0
}

func (x *RowOrganizedTable_HeaderCell) GetRowspan() uint32 {
	if x != nil {
		return x.Rowspan
	}
	return 0
}

func (x *RowOrganizedTable_HeaderCell) GetValue() *_struct.Value {
	if x != nil {
		return x.Value
	}
	return nil
}

var File_fds_protobuf_stach_v3_RowOrganizedTable_proto protoreflect.FileDescriptor

var file_fds_protobuf_stach_v3_RowOrganizedTable_proto_rawDesc = []byte{
	0x0a, 0x2d, 0x66, 0x64, 0x73, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f, 0x73,
	0x74, 0x61, 0x63, 0x68, 0x2f, 0x76, 0x33, 0x2f, 0x52, 0x6f, 0x77, 0x4f, 0x72, 0x67, 0x61, 0x6e,
	0x69, 0x7a, 0x65, 0x64, 0x54, 0x61, 0x62, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12,
	0x19, 0x66, 0x61, 0x63, 0x74, 0x73, 0x65, 0x74, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75,
	0x66, 0x2e, 0x73, 0x74, 0x61, 0x63, 0x68, 0x2e, 0x76, 0x33, 0x1a, 0x28, 0x66, 0x64, 0x73, 0x2f,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f, 0x73, 0x74, 0x61, 0x63, 0x68, 0x2f, 0x76,
	0x33, 0x2f, 0x4d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x49, 0x74, 0x65, 0x6d, 0x2e, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x21, 0x66, 0x64, 0x73, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62,
	0x75, 0x66, 0x2f, 0x73, 0x74, 0x61, 0x63, 0x68, 0x2f, 0x76, 0x33, 0x2f, 0x54, 0x61, 0x62, 0x6c,
	0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x21, 0x66, 0x64, 0x73, 0x2f, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f, 0x73, 0x74, 0x61, 0x63, 0x68, 0x2f, 0x76, 0x33, 0x2f, 0x56,
	0x69, 0x65, 0x77, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x1c, 0x67, 0x6f, 0x6f, 0x67,
	0x6c, 0x65, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f, 0x73, 0x74, 0x72, 0x75,
	0x63, 0x74, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0x89, 0x08, 0x0a, 0x11, 0x52, 0x6f, 0x77,
	0x4f, 0x72, 0x67, 0x61, 0x6e, 0x69, 0x7a, 0x65, 0x64, 0x54, 0x61, 0x62, 0x6c, 0x65, 0x12, 0x18,
	0x0a, 0x07, 0x76, 0x65, 0x72, 0x73, 0x69, 0x6f, 0x6e, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x07, 0x76, 0x65, 0x72, 0x73, 0x69, 0x6f, 0x6e, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65,
	0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x4d, 0x0a, 0x07,
	0x63, 0x6f, 0x6c, 0x75, 0x6d, 0x6e, 0x73, 0x18, 0x03, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x33, 0x2e,
	0x66, 0x61, 0x63, 0x74, 0x73, 0x65, 0x74, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66,
	0x2e, 0x73, 0x74, 0x61, 0x63, 0x68, 0x2e, 0x76, 0x33, 0x2e, 0x52, 0x6f, 0x77, 0x4f, 0x72, 0x67,
	0x61, 0x6e, 0x69, 0x7a, 0x65, 0x64, 0x54, 0x61, 0x62, 0x6c, 0x65, 0x2e, 0x43, 0x6f, 0x6c, 0x75,
	0x6d, 0x6e, 0x52, 0x07, 0x63, 0x6f, 0x6c, 0x75, 0x6d, 0x6e, 0x73, 0x12, 0x36, 0x0a, 0x05, 0x74,
	0x61, 0x62, 0x6c, 0x65, 0x18, 0x04, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x20, 0x2e, 0x66, 0x61, 0x63,
	0x74, 0x73, 0x65, 0x74, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x73, 0x74,
	0x61, 0x63, 0x68, 0x2e, 0x76, 0x33, 0x2e, 0x54, 0x61, 0x62, 0x6c, 0x65, 0x52, 0x05, 0x74, 0x61,
	0x62, 0x6c, 0x65, 0x12, 0x67, 0x0a, 0x19, 0x6d, 0x75, 0x6c, 0x74, 0x69, 0x5f, 0x6c, 0x65, 0x76,
	0x65, 0x6c, 0x5f, 0x68, 0x65, 0x61, 0x64, 0x65, 0x72, 0x73, 0x5f, 0x74, 0x61, 0x62, 0x6c, 0x65,
	0x18, 0x05, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x2c, 0x2e, 0x66, 0x61, 0x63, 0x74, 0x73, 0x65, 0x74,
	0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x73, 0x74, 0x61, 0x63, 0x68, 0x2e,
	0x76, 0x33, 0x2e, 0x52, 0x6f, 0x77, 0x4f, 0x72, 0x67, 0x61, 0x6e, 0x69, 0x7a, 0x65, 0x64, 0x54,
	0x61, 0x62, 0x6c, 0x65, 0x52, 0x16, 0x6d, 0x75, 0x6c, 0x74, 0x69, 0x4c, 0x65, 0x76, 0x65, 0x6c,
	0x48, 0x65, 0x61, 0x64, 0x65, 0x72, 0x73, 0x54, 0x61, 0x62, 0x6c, 0x65, 0x12, 0x3b, 0x0a, 0x05,
	0x76, 0x69, 0x65, 0x77, 0x73, 0x18, 0x06, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x25, 0x2e, 0x66, 0x61,
	0x63, 0x74, 0x73, 0x65, 0x74, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x73,
	0x74, 0x61, 0x63, 0x68, 0x2e, 0x76, 0x33, 0x2e, 0x56, 0x69, 0x65, 0x77, 0x73, 0x2e, 0x56, 0x69,
	0x65, 0x77, 0x52, 0x05, 0x76, 0x69, 0x65, 0x77, 0x73, 0x12, 0x57, 0x0a, 0x0b, 0x68, 0x65, 0x61,
	0x64, 0x65, 0x72, 0x5f, 0x72, 0x6f, 0x77, 0x73, 0x18, 0x07, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x36,
	0x2e, 0x66, 0x61, 0x63, 0x74, 0x73, 0x65, 0x74, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75,
	0x66, 0x2e, 0x73, 0x74, 0x61, 0x63, 0x68, 0x2e, 0x76, 0x33, 0x2e, 0x52, 0x6f, 0x77, 0x4f, 0x72,
	0x67, 0x61, 0x6e, 0x69, 0x7a, 0x65, 0x64, 0x54, 0x61, 0x62, 0x6c, 0x65, 0x2e, 0x48, 0x65, 0x61,
	0x64, 0x65, 0x72, 0x52, 0x6f, 0x77, 0x52, 0x0a, 0x68, 0x65, 0x61, 0x64, 0x65, 0x72, 0x52, 0x6f,
	0x77, 0x73, 0x12, 0x2b, 0x0a, 0x04, 0x72, 0x6f, 0x77, 0x73, 0x18, 0x08, 0x20, 0x03, 0x28, 0x0b,
	0x32, 0x17, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62,
	0x75, 0x66, 0x2e, 0x53, 0x74, 0x72, 0x75, 0x63, 0x74, 0x52, 0x04, 0x72, 0x6f, 0x77, 0x73, 0x1a,
	0xc6, 0x02, 0x0a, 0x06, 0x43, 0x6f, 0x6c, 0x75, 0x6d, 0x6e, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61,
	0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x21,
	0x0a, 0x0c, 0x66, 0x6f, 0x72, 0x62, 0x69, 0x64, 0x5f, 0x6e, 0x75, 0x6c, 0x6c, 0x73, 0x18, 0x02,
	0x20, 0x01, 0x28, 0x08, 0x52, 0x0b, 0x66, 0x6f, 0x72, 0x62, 0x69, 0x64, 0x4e, 0x75, 0x6c, 0x6c,
	0x73, 0x12, 0x27, 0x0a, 0x0f, 0x63, 0x6f, 0x6e, 0x74, 0x65, 0x78, 0x74, 0x75, 0x61, 0x6c, 0x5f,
	0x74, 0x79, 0x70, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0e, 0x63, 0x6f, 0x6e, 0x74,
	0x65, 0x78, 0x74, 0x75, 0x61, 0x6c, 0x54, 0x79, 0x70, 0x65, 0x12, 0x70, 0x0a, 0x0f, 0x63, 0x75,
	0x73, 0x74, 0x6f, 0x6d, 0x5f, 0x6d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x18, 0x64, 0x20,
	0x03, 0x28, 0x0b, 0x32, 0x47, 0x2e, 0x66, 0x61, 0x63, 0x74, 0x73, 0x65, 0x74, 0x2e, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x73, 0x74, 0x61, 0x63, 0x68, 0x2e, 0x76, 0x33, 0x2e,
	0x52, 0x6f, 0x77, 0x4f, 0x72, 0x67, 0x61, 0x6e, 0x69, 0x7a, 0x65, 0x64, 0x54, 0x61, 0x62, 0x6c,
	0x65, 0x2e, 0x43, 0x6f, 0x6c, 0x75, 0x6d, 0x6e, 0x2e, 0x43, 0x75, 0x73, 0x74, 0x6f, 0x6d, 0x4d,
	0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x52, 0x0e, 0x63, 0x75,
	0x73, 0x74, 0x6f, 0x6d, 0x4d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x1a, 0x6a, 0x0a, 0x13,
	0x43, 0x75, 0x73, 0x74, 0x6f, 0x6d, 0x4d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x45, 0x6e,
	0x74, 0x72, 0x79, 0x12, 0x10, 0x0a, 0x03, 0x6b, 0x65, 0x79, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x03, 0x6b, 0x65, 0x79, 0x12, 0x3d, 0x0a, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x18, 0x02,
	0x20, 0x01, 0x28, 0x0b, 0x32, 0x27, 0x2e, 0x66, 0x61, 0x63, 0x74, 0x73, 0x65, 0x74, 0x2e, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x73, 0x74, 0x61, 0x63, 0x68, 0x2e, 0x76, 0x33,
	0x2e, 0x4d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x49, 0x74, 0x65, 0x6d, 0x52, 0x05, 0x76,
	0x61, 0x6c, 0x75, 0x65, 0x3a, 0x02, 0x38, 0x01, 0x1a, 0x5a, 0x0a, 0x09, 0x48, 0x65, 0x61, 0x64,
	0x65, 0x72, 0x52, 0x6f, 0x77, 0x12, 0x4d, 0x0a, 0x05, 0x63, 0x65, 0x6c, 0x6c, 0x73, 0x18, 0x01,
	0x20, 0x03, 0x28, 0x0b, 0x32, 0x37, 0x2e, 0x66, 0x61, 0x63, 0x74, 0x73, 0x65, 0x74, 0x2e, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x73, 0x74, 0x61, 0x63, 0x68, 0x2e, 0x76, 0x33,
	0x2e, 0x52, 0x6f, 0x77, 0x4f, 0x72, 0x67, 0x61, 0x6e, 0x69, 0x7a, 0x65, 0x64, 0x54, 0x61, 0x62,
	0x6c, 0x65, 0x2e, 0x48, 0x65, 0x61, 0x64, 0x65, 0x72, 0x43, 0x65, 0x6c, 0x6c, 0x52, 0x05, 0x63,
	0x65, 0x6c, 0x6c, 0x73, 0x1a, 0x6e, 0x0a, 0x0a, 0x48, 0x65, 0x61, 0x64, 0x65, 0x72, 0x43, 0x65,
	0x6c, 0x6c, 0x12, 0x18, 0x0a, 0x07, 0x63, 0x6f, 0x6c, 0x73, 0x70, 0x61, 0x6e, 0x18, 0x01, 0x20,
	0x01, 0x28, 0x0d, 0x52, 0x07, 0x63, 0x6f, 0x6c, 0x73, 0x70, 0x61, 0x6e, 0x12, 0x18, 0x0a, 0x07,
	0x72, 0x6f, 0x77, 0x73, 0x70, 0x61, 0x6e, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0d, 0x52, 0x07, 0x72,
	0x6f, 0x77, 0x73, 0x70, 0x61, 0x6e, 0x12, 0x2c, 0x0a, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x18,
	0x03, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x16, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x56, 0x61, 0x6c, 0x75, 0x65, 0x52, 0x05, 0x76,
	0x61, 0x6c, 0x75, 0x65, 0x42, 0x91, 0x01, 0x0a, 0x1d, 0x63, 0x6f, 0x6d, 0x2e, 0x66, 0x61, 0x63,
	0x74, 0x73, 0x65, 0x74, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x73, 0x74,
	0x61, 0x63, 0x68, 0x2e, 0x76, 0x33, 0x42, 0x16, 0x52, 0x6f, 0x77, 0x4f, 0x72, 0x67, 0x61, 0x6e,
	0x69, 0x7a, 0x65, 0x64, 0x54, 0x61, 0x62, 0x6c, 0x65, 0x50, 0x72, 0x6f, 0x74, 0x6f, 0x5a, 0x3c,
	0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x66, 0x61, 0x63, 0x74, 0x73,
	0x65, 0x74, 0x2f, 0x73, 0x74, 0x61, 0x63, 0x68, 0x73, 0x63, 0x68, 0x65, 0x6d, 0x61, 0x2d, 0x73,
	0x64, 0x6b, 0x73, 0x2f, 0x67, 0x6f, 0x2f, 0x66, 0x64, 0x73, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x62, 0x75, 0x66, 0x2f, 0x73, 0x74, 0x61, 0x63, 0x68, 0x2f, 0x76, 0x33, 0xaa, 0x02, 0x19, 0x46,
	0x61, 0x63, 0x74, 0x53, 0x65, 0x74, 0x2e, 0x50, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e,
	0x53, 0x74, 0x61, 0x63, 0x68, 0x2e, 0x56, 0x33, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_fds_protobuf_stach_v3_RowOrganizedTable_proto_rawDescOnce sync.Once
	file_fds_protobuf_stach_v3_RowOrganizedTable_proto_rawDescData = file_fds_protobuf_stach_v3_RowOrganizedTable_proto_rawDesc
)

func file_fds_protobuf_stach_v3_RowOrganizedTable_proto_rawDescGZIP() []byte {
	file_fds_protobuf_stach_v3_RowOrganizedTable_proto_rawDescOnce.Do(func() {
		file_fds_protobuf_stach_v3_RowOrganizedTable_proto_rawDescData = protoimpl.X.CompressGZIP(file_fds_protobuf_stach_v3_RowOrganizedTable_proto_rawDescData)
	})
	return file_fds_protobuf_stach_v3_RowOrganizedTable_proto_rawDescData
}

var file_fds_protobuf_stach_v3_RowOrganizedTable_proto_msgTypes = make([]protoimpl.MessageInfo, 5)
var file_fds_protobuf_stach_v3_RowOrganizedTable_proto_goTypes = []interface{}{
	(*RowOrganizedTable)(nil),            // 0: factset.protobuf.stach.v3.RowOrganizedTable
	(*RowOrganizedTable_Column)(nil),     // 1: factset.protobuf.stach.v3.RowOrganizedTable.Column
	(*RowOrganizedTable_HeaderRow)(nil),  // 2: factset.protobuf.stach.v3.RowOrganizedTable.HeaderRow
	(*RowOrganizedTable_HeaderCell)(nil), // 3: factset.protobuf.stach.v3.RowOrganizedTable.HeaderCell
	nil,                                  // 4: factset.protobuf.stach.v3.RowOrganizedTable.Column.CustomMetadataEntry
	(*Table)(nil),                        // 5: factset.protobuf.stach.v3.Table
	(*Views_View)(nil),                   // 6: factset.protobuf.stach.v3.Views.View
	(*_struct.Struct)(nil),               // 7: google.protobuf.Struct
	(*_struct.Value)(nil),                // 8: google.protobuf.Value
	(*MetadataItem)(nil),                 // 9: factset.protobuf.stach.v3.MetadataItem
}
var file_fds_protobuf_stach_v3_RowOrganizedTable_proto_depIdxs = []int32{
	1,  // 0: factset.protobuf.stach.v3.RowOrganizedTable.columns:type_name -> factset.protobuf.stach.v3.RowOrganizedTable.Column
	5,  // 1: factset.protobuf.stach.v3.RowOrganizedTable.table:type_name -> factset.protobuf.stach.v3.Table
	0,  // 2: factset.protobuf.stach.v3.RowOrganizedTable.multi_level_headers_table:type_name -> factset.protobuf.stach.v3.RowOrganizedTable
	6,  // 3: factset.protobuf.stach.v3.RowOrganizedTable.views:type_name -> factset.protobuf.stach.v3.Views.View
	2,  // 4: factset.protobuf.stach.v3.RowOrganizedTable.header_rows:type_name -> factset.protobuf.stach.v3.RowOrganizedTable.HeaderRow
	7,  // 5: factset.protobuf.stach.v3.RowOrganizedTable.rows:type_name -> google.protobuf.Struct
	4,  // 6: factset.protobuf.stach.v3.RowOrganizedTable.Column.custom_metadata:type_name -> factset.protobuf.stach.v3.RowOrganizedTable.Column.CustomMetadataEntry
	3,  // 7: factset.protobuf.stach.v3.RowOrganizedTable.HeaderRow.cells:type_name -> factset.protobuf.stach.v3.RowOrganizedTable.HeaderCell
	8,  // 8: factset.protobuf.stach.v3.RowOrganizedTable.HeaderCell.value:type_name -> google.protobuf.Value
	9,  // 9: factset.protobuf.stach.v3.RowOrganizedTable.Column.CustomMetadataEntry.value:type_name -> factset.protobuf.stach.v3.MetadataItem
	10, // [10:10] is the sub-list for method output_type
	10, // [10:10] is the sub-list for method input_type
	10, // [10:10] is the sub-list for extension type_name
	10, // [10:10] is the sub-list for extension extendee
	0,  // [0:10] is the sub-list for field type_name
}

func init() { file_fds_protobuf_stach_v3_RowOrganizedTable_proto_init() }
func file_fds_protobuf_stach_v3_RowOrganizedTable_proto_init() {
	if File_fds_protobuf_stach_v3_RowOrganizedTable_proto != nil {
		return
	}
	file_fds_protobuf_stach_v3_MetadataItem_proto_init()
	file_fds_protobuf_stach_v3_Table_proto_init()
	file_fds_protobuf_stach_v3_Views_proto_init()
	if !protoimpl.UnsafeEnabled {
		file_fds_protobuf_stach_v3_RowOrganizedTable_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*RowOrganizedTable); i {
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
		file_fds_protobuf_stach_v3_RowOrganizedTable_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*RowOrganizedTable_Column); i {
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
		file_fds_protobuf_stach_v3_RowOrganizedTable_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*RowOrganizedTable_HeaderRow); i {
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
		file_fds_protobuf_stach_v3_RowOrganizedTable_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*RowOrganizedTable_HeaderCell); i {
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
			RawDescriptor: file_fds_protobuf_stach_v3_RowOrganizedTable_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   5,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_fds_protobuf_stach_v3_RowOrganizedTable_proto_goTypes,
		DependencyIndexes: file_fds_protobuf_stach_v3_RowOrganizedTable_proto_depIdxs,
		MessageInfos:      file_fds_protobuf_stach_v3_RowOrganizedTable_proto_msgTypes,
	}.Build()
	File_fds_protobuf_stach_v3_RowOrganizedTable_proto = out.File
	file_fds_protobuf_stach_v3_RowOrganizedTable_proto_rawDesc = nil
	file_fds_protobuf_stach_v3_RowOrganizedTable_proto_goTypes = nil
	file_fds_protobuf_stach_v3_RowOrganizedTable_proto_depIdxs = nil
}

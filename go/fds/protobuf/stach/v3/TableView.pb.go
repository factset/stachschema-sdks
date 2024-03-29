// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.0-devel
// 	protoc        v3.19.4
// source: fds/protobuf/stach/v3/TableView.proto

package v3

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

//
//A set of metadata specifying the settings that instruct how to turn tabular data into a rendered table.
type TableView struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	//
	//The human readable display name for the table.
	//Optional.
	DisplayName string `protobuf:"bytes,1,opt,name=display_name,json=displayName,proto3" json:"display_name,omitempty"`
	//
	//The names of columns to display, which can include the alias for the collapsed column and the alias for the split columns.
	//An empty array will display no columns. The order of the column names is the order the columns will be displayed.
	//Required.
	Columns []string `protobuf:"bytes,2,rep,name=columns,proto3" json:"columns,omitempty"`
	//
	//The human-readable header values of columns to be applied.
	//Key is the column name, and value is the human-readable header value. e.g. `{ 'mcap': 'Market Capitalization' }`
	//Optional.
	Headers map[string]string `protobuf:"bytes,3,rep,name=headers,proto3" json:"headers,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
	//
	//The group algorithm to be applied.
	//Optional.
	Group *TableView_Group `protobuf:"bytes,4,opt,name=group,proto3" json:"group,omitempty"`
	//
	//The split algorithm to be applied.
	//Optional.
	Split *TableView_Split `protobuf:"bytes,5,opt,name=split,proto3" json:"split,omitempty"`
	//
	//The custom metadata.
	//Optional.
	CustomMetadata map[string]*MetadataItem `protobuf:"bytes,100,rep,name=custom_metadata,json=customMetadata,proto3" json:"custom_metadata,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
}

func (x *TableView) Reset() {
	*x = TableView{}
	if protoimpl.UnsafeEnabled {
		mi := &file_fds_protobuf_stach_v3_TableView_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *TableView) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*TableView) ProtoMessage() {}

func (x *TableView) ProtoReflect() protoreflect.Message {
	mi := &file_fds_protobuf_stach_v3_TableView_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use TableView.ProtoReflect.Descriptor instead.
func (*TableView) Descriptor() ([]byte, []int) {
	return file_fds_protobuf_stach_v3_TableView_proto_rawDescGZIP(), []int{0}
}

func (x *TableView) GetDisplayName() string {
	if x != nil {
		return x.DisplayName
	}
	return ""
}

func (x *TableView) GetColumns() []string {
	if x != nil {
		return x.Columns
	}
	return nil
}

func (x *TableView) GetHeaders() map[string]string {
	if x != nil {
		return x.Headers
	}
	return nil
}

func (x *TableView) GetGroup() *TableView_Group {
	if x != nil {
		return x.Group
	}
	return nil
}

func (x *TableView) GetSplit() *TableView_Split {
	if x != nil {
		return x.Split
	}
	return nil
}

func (x *TableView) GetCustomMetadata() map[string]*MetadataItem {
	if x != nil {
		return x.CustomMetadata
	}
	return nil
}

//
//An algorithm that groups tabular data by a set of columns and produces aggregate rows.
type TableView_Group struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	//
	//The names of the columns to group by.
	//Required.
	By []string `protobuf:"bytes,1,rep,name=by,proto3" json:"by,omitempty"`
	//
	//The settings for the algorithm to create a collapsed column.
	//The rendering layer should collapse the columns specified by `Group.by` or `GroupResult.by` into a collapsed column.
	//Optional.
	CollapsedColumn *TableView_CollapsedColumn `protobuf:"bytes,2,opt,name=collapsed_column,json=collapsedColumn,proto3" json:"collapsed_column,omitempty"`
}

func (x *TableView_Group) Reset() {
	*x = TableView_Group{}
	if protoimpl.UnsafeEnabled {
		mi := &file_fds_protobuf_stach_v3_TableView_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *TableView_Group) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*TableView_Group) ProtoMessage() {}

func (x *TableView_Group) ProtoReflect() protoreflect.Message {
	mi := &file_fds_protobuf_stach_v3_TableView_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use TableView_Group.ProtoReflect.Descriptor instead.
func (*TableView_Group) Descriptor() ([]byte, []int) {
	return file_fds_protobuf_stach_v3_TableView_proto_rawDescGZIP(), []int{0, 0}
}

func (x *TableView_Group) GetBy() []string {
	if x != nil {
		return x.By
	}
	return nil
}

func (x *TableView_Group) GetCollapsedColumn() *TableView_CollapsedColumn {
	if x != nil {
		return x.CollapsedColumn
	}
	return nil
}

//
//A virtual collapsed column.
type TableView_CollapsedColumn struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	//
	//The alias of the collapsed column.
	//The collapsed column is *not* in the data so it is considered virtual and therefore needs an alias. A dollar sign ($) prefix, such as "$collapsedColumn", can be used to indicate an alias but is not necessary.
	//Required.
	Alias string `protobuf:"bytes,1,opt,name=alias,proto3" json:"alias,omitempty"`
}

func (x *TableView_CollapsedColumn) Reset() {
	*x = TableView_CollapsedColumn{}
	if protoimpl.UnsafeEnabled {
		mi := &file_fds_protobuf_stach_v3_TableView_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *TableView_CollapsedColumn) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*TableView_CollapsedColumn) ProtoMessage() {}

func (x *TableView_CollapsedColumn) ProtoReflect() protoreflect.Message {
	mi := &file_fds_protobuf_stach_v3_TableView_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use TableView_CollapsedColumn.ProtoReflect.Descriptor instead.
func (*TableView_CollapsedColumn) Descriptor() ([]byte, []int) {
	return file_fds_protobuf_stach_v3_TableView_proto_rawDescGZIP(), []int{0, 1}
}

func (x *TableView_CollapsedColumn) GetAlias() string {
	if x != nil {
		return x.Alias
	}
	return ""
}

//
//An algorithm that vertically splits tabular data and produces a column for each unique value in the columns that were split over.
type TableView_Split struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	//
	//The alias of the columns generated by the split algorithm.
	//A dollar sign ($) prefix, such as "$splitColumns", can be used to indicate an alias but is not necessary.
	//Required.
	Alias string `protobuf:"bytes,1,opt,name=alias,proto3" json:"alias,omitempty"`
	//
	//The names of columns to split by.
	//Required.
	By []string `protobuf:"bytes,2,rep,name=by,proto3" json:"by,omitempty"`
	//
	//The names of columns to include in the multi-level headers table when splitting.
	//Optional.
	Include []string `protobuf:"bytes,3,rep,name=include,proto3" json:"include,omitempty"`
	//
	//The names of columns to split over.
	//Required.
	Over []string `protobuf:"bytes,4,rep,name=over,proto3" json:"over,omitempty"`
	//
	//The human-readable header values of `over` columns to be applied.
	//Key is the column name, and value is the human-readable value.
	//Optional.
	Headers map[string]string `protobuf:"bytes,5,rep,name=headers,proto3" json:"headers,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
	//
	//Whether to remove empty split columns or not.
	//Default is `false`.
	//Optional.
	RemoveEmptySplitColumns bool `protobuf:"varint,6,opt,name=remove_empty_split_columns,json=removeEmptySplitColumns,proto3" json:"remove_empty_split_columns,omitempty"`
}

func (x *TableView_Split) Reset() {
	*x = TableView_Split{}
	if protoimpl.UnsafeEnabled {
		mi := &file_fds_protobuf_stach_v3_TableView_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *TableView_Split) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*TableView_Split) ProtoMessage() {}

func (x *TableView_Split) ProtoReflect() protoreflect.Message {
	mi := &file_fds_protobuf_stach_v3_TableView_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use TableView_Split.ProtoReflect.Descriptor instead.
func (*TableView_Split) Descriptor() ([]byte, []int) {
	return file_fds_protobuf_stach_v3_TableView_proto_rawDescGZIP(), []int{0, 2}
}

func (x *TableView_Split) GetAlias() string {
	if x != nil {
		return x.Alias
	}
	return ""
}

func (x *TableView_Split) GetBy() []string {
	if x != nil {
		return x.By
	}
	return nil
}

func (x *TableView_Split) GetInclude() []string {
	if x != nil {
		return x.Include
	}
	return nil
}

func (x *TableView_Split) GetOver() []string {
	if x != nil {
		return x.Over
	}
	return nil
}

func (x *TableView_Split) GetHeaders() map[string]string {
	if x != nil {
		return x.Headers
	}
	return nil
}

func (x *TableView_Split) GetRemoveEmptySplitColumns() bool {
	if x != nil {
		return x.RemoveEmptySplitColumns
	}
	return false
}

var File_fds_protobuf_stach_v3_TableView_proto protoreflect.FileDescriptor

var file_fds_protobuf_stach_v3_TableView_proto_rawDesc = []byte{
	0x0a, 0x25, 0x66, 0x64, 0x73, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f, 0x73,
	0x74, 0x61, 0x63, 0x68, 0x2f, 0x76, 0x33, 0x2f, 0x54, 0x61, 0x62, 0x6c, 0x65, 0x56, 0x69, 0x65,
	0x77, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x19, 0x66, 0x61, 0x63, 0x74, 0x73, 0x65, 0x74,
	0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x73, 0x74, 0x61, 0x63, 0x68, 0x2e,
	0x76, 0x33, 0x1a, 0x28, 0x66, 0x64, 0x73, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66,
	0x2f, 0x73, 0x74, 0x61, 0x63, 0x68, 0x2f, 0x76, 0x33, 0x2f, 0x4d, 0x65, 0x74, 0x61, 0x64, 0x61,
	0x74, 0x61, 0x49, 0x74, 0x65, 0x6d, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0xf1, 0x07, 0x0a,
	0x09, 0x54, 0x61, 0x62, 0x6c, 0x65, 0x56, 0x69, 0x65, 0x77, 0x12, 0x21, 0x0a, 0x0c, 0x64, 0x69,
	0x73, 0x70, 0x6c, 0x61, 0x79, 0x5f, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x0b, 0x64, 0x69, 0x73, 0x70, 0x6c, 0x61, 0x79, 0x4e, 0x61, 0x6d, 0x65, 0x12, 0x18, 0x0a,
	0x07, 0x63, 0x6f, 0x6c, 0x75, 0x6d, 0x6e, 0x73, 0x18, 0x02, 0x20, 0x03, 0x28, 0x09, 0x52, 0x07,
	0x63, 0x6f, 0x6c, 0x75, 0x6d, 0x6e, 0x73, 0x12, 0x4b, 0x0a, 0x07, 0x68, 0x65, 0x61, 0x64, 0x65,
	0x72, 0x73, 0x18, 0x03, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x31, 0x2e, 0x66, 0x61, 0x63, 0x74, 0x73,
	0x65, 0x74, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x73, 0x74, 0x61, 0x63,
	0x68, 0x2e, 0x76, 0x33, 0x2e, 0x54, 0x61, 0x62, 0x6c, 0x65, 0x56, 0x69, 0x65, 0x77, 0x2e, 0x48,
	0x65, 0x61, 0x64, 0x65, 0x72, 0x73, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x52, 0x07, 0x68, 0x65, 0x61,
	0x64, 0x65, 0x72, 0x73, 0x12, 0x40, 0x0a, 0x05, 0x67, 0x72, 0x6f, 0x75, 0x70, 0x18, 0x04, 0x20,
	0x01, 0x28, 0x0b, 0x32, 0x2a, 0x2e, 0x66, 0x61, 0x63, 0x74, 0x73, 0x65, 0x74, 0x2e, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x73, 0x74, 0x61, 0x63, 0x68, 0x2e, 0x76, 0x33, 0x2e,
	0x54, 0x61, 0x62, 0x6c, 0x65, 0x56, 0x69, 0x65, 0x77, 0x2e, 0x47, 0x72, 0x6f, 0x75, 0x70, 0x52,
	0x05, 0x67, 0x72, 0x6f, 0x75, 0x70, 0x12, 0x40, 0x0a, 0x05, 0x73, 0x70, 0x6c, 0x69, 0x74, 0x18,
	0x05, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x2a, 0x2e, 0x66, 0x61, 0x63, 0x74, 0x73, 0x65, 0x74, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x73, 0x74, 0x61, 0x63, 0x68, 0x2e, 0x76,
	0x33, 0x2e, 0x54, 0x61, 0x62, 0x6c, 0x65, 0x56, 0x69, 0x65, 0x77, 0x2e, 0x53, 0x70, 0x6c, 0x69,
	0x74, 0x52, 0x05, 0x73, 0x70, 0x6c, 0x69, 0x74, 0x12, 0x61, 0x0a, 0x0f, 0x63, 0x75, 0x73, 0x74,
	0x6f, 0x6d, 0x5f, 0x6d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x18, 0x64, 0x20, 0x03, 0x28,
	0x0b, 0x32, 0x38, 0x2e, 0x66, 0x61, 0x63, 0x74, 0x73, 0x65, 0x74, 0x2e, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x62, 0x75, 0x66, 0x2e, 0x73, 0x74, 0x61, 0x63, 0x68, 0x2e, 0x76, 0x33, 0x2e, 0x54, 0x61,
	0x62, 0x6c, 0x65, 0x56, 0x69, 0x65, 0x77, 0x2e, 0x43, 0x75, 0x73, 0x74, 0x6f, 0x6d, 0x4d, 0x65,
	0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x52, 0x0e, 0x63, 0x75, 0x73,
	0x74, 0x6f, 0x6d, 0x4d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x1a, 0x78, 0x0a, 0x05, 0x47,
	0x72, 0x6f, 0x75, 0x70, 0x12, 0x0e, 0x0a, 0x02, 0x62, 0x79, 0x18, 0x01, 0x20, 0x03, 0x28, 0x09,
	0x52, 0x02, 0x62, 0x79, 0x12, 0x5f, 0x0a, 0x10, 0x63, 0x6f, 0x6c, 0x6c, 0x61, 0x70, 0x73, 0x65,
	0x64, 0x5f, 0x63, 0x6f, 0x6c, 0x75, 0x6d, 0x6e, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x34,
	0x2e, 0x66, 0x61, 0x63, 0x74, 0x73, 0x65, 0x74, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75,
	0x66, 0x2e, 0x73, 0x74, 0x61, 0x63, 0x68, 0x2e, 0x76, 0x33, 0x2e, 0x54, 0x61, 0x62, 0x6c, 0x65,
	0x56, 0x69, 0x65, 0x77, 0x2e, 0x43, 0x6f, 0x6c, 0x6c, 0x61, 0x70, 0x73, 0x65, 0x64, 0x43, 0x6f,
	0x6c, 0x75, 0x6d, 0x6e, 0x52, 0x0f, 0x63, 0x6f, 0x6c, 0x6c, 0x61, 0x70, 0x73, 0x65, 0x64, 0x43,
	0x6f, 0x6c, 0x75, 0x6d, 0x6e, 0x1a, 0x27, 0x0a, 0x0f, 0x43, 0x6f, 0x6c, 0x6c, 0x61, 0x70, 0x73,
	0x65, 0x64, 0x43, 0x6f, 0x6c, 0x75, 0x6d, 0x6e, 0x12, 0x14, 0x0a, 0x05, 0x61, 0x6c, 0x69, 0x61,
	0x73, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x61, 0x6c, 0x69, 0x61, 0x73, 0x1a, 0xa7,
	0x02, 0x0a, 0x05, 0x53, 0x70, 0x6c, 0x69, 0x74, 0x12, 0x14, 0x0a, 0x05, 0x61, 0x6c, 0x69, 0x61,
	0x73, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x61, 0x6c, 0x69, 0x61, 0x73, 0x12, 0x0e,
	0x0a, 0x02, 0x62, 0x79, 0x18, 0x02, 0x20, 0x03, 0x28, 0x09, 0x52, 0x02, 0x62, 0x79, 0x12, 0x18,
	0x0a, 0x07, 0x69, 0x6e, 0x63, 0x6c, 0x75, 0x64, 0x65, 0x18, 0x03, 0x20, 0x03, 0x28, 0x09, 0x52,
	0x07, 0x69, 0x6e, 0x63, 0x6c, 0x75, 0x64, 0x65, 0x12, 0x12, 0x0a, 0x04, 0x6f, 0x76, 0x65, 0x72,
	0x18, 0x04, 0x20, 0x03, 0x28, 0x09, 0x52, 0x04, 0x6f, 0x76, 0x65, 0x72, 0x12, 0x51, 0x0a, 0x07,
	0x68, 0x65, 0x61, 0x64, 0x65, 0x72, 0x73, 0x18, 0x05, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x37, 0x2e,
	0x66, 0x61, 0x63, 0x74, 0x73, 0x65, 0x74, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66,
	0x2e, 0x73, 0x74, 0x61, 0x63, 0x68, 0x2e, 0x76, 0x33, 0x2e, 0x54, 0x61, 0x62, 0x6c, 0x65, 0x56,
	0x69, 0x65, 0x77, 0x2e, 0x53, 0x70, 0x6c, 0x69, 0x74, 0x2e, 0x48, 0x65, 0x61, 0x64, 0x65, 0x72,
	0x73, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x52, 0x07, 0x68, 0x65, 0x61, 0x64, 0x65, 0x72, 0x73, 0x12,
	0x3b, 0x0a, 0x1a, 0x72, 0x65, 0x6d, 0x6f, 0x76, 0x65, 0x5f, 0x65, 0x6d, 0x70, 0x74, 0x79, 0x5f,
	0x73, 0x70, 0x6c, 0x69, 0x74, 0x5f, 0x63, 0x6f, 0x6c, 0x75, 0x6d, 0x6e, 0x73, 0x18, 0x06, 0x20,
	0x01, 0x28, 0x08, 0x52, 0x17, 0x72, 0x65, 0x6d, 0x6f, 0x76, 0x65, 0x45, 0x6d, 0x70, 0x74, 0x79,
	0x53, 0x70, 0x6c, 0x69, 0x74, 0x43, 0x6f, 0x6c, 0x75, 0x6d, 0x6e, 0x73, 0x1a, 0x3a, 0x0a, 0x0c,
	0x48, 0x65, 0x61, 0x64, 0x65, 0x72, 0x73, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x12, 0x10, 0x0a, 0x03,
	0x6b, 0x65, 0x79, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x03, 0x6b, 0x65, 0x79, 0x12, 0x14,
	0x0a, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x76,
	0x61, 0x6c, 0x75, 0x65, 0x3a, 0x02, 0x38, 0x01, 0x1a, 0x3a, 0x0a, 0x0c, 0x48, 0x65, 0x61, 0x64,
	0x65, 0x72, 0x73, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x12, 0x10, 0x0a, 0x03, 0x6b, 0x65, 0x79, 0x18,
	0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x03, 0x6b, 0x65, 0x79, 0x12, 0x14, 0x0a, 0x05, 0x76, 0x61,
	0x6c, 0x75, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65,
	0x3a, 0x02, 0x38, 0x01, 0x1a, 0x6a, 0x0a, 0x13, 0x43, 0x75, 0x73, 0x74, 0x6f, 0x6d, 0x4d, 0x65,
	0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x12, 0x10, 0x0a, 0x03, 0x6b,
	0x65, 0x79, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x03, 0x6b, 0x65, 0x79, 0x12, 0x3d, 0x0a,
	0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x27, 0x2e, 0x66,
	0x61, 0x63, 0x74, 0x73, 0x65, 0x74, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e,
	0x73, 0x74, 0x61, 0x63, 0x68, 0x2e, 0x76, 0x33, 0x2e, 0x4d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74,
	0x61, 0x49, 0x74, 0x65, 0x6d, 0x52, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x3a, 0x02, 0x38, 0x01,
	0x42, 0x89, 0x01, 0x0a, 0x1d, 0x63, 0x6f, 0x6d, 0x2e, 0x66, 0x61, 0x63, 0x74, 0x73, 0x65, 0x74,
	0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x73, 0x74, 0x61, 0x63, 0x68, 0x2e,
	0x76, 0x33, 0x42, 0x0e, 0x54, 0x61, 0x62, 0x6c, 0x65, 0x56, 0x69, 0x65, 0x77, 0x50, 0x72, 0x6f,
	0x74, 0x6f, 0x5a, 0x3c, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x66,
	0x61, 0x63, 0x74, 0x73, 0x65, 0x74, 0x2f, 0x73, 0x74, 0x61, 0x63, 0x68, 0x73, 0x63, 0x68, 0x65,
	0x6d, 0x61, 0x2d, 0x73, 0x64, 0x6b, 0x73, 0x2f, 0x67, 0x6f, 0x2f, 0x66, 0x64, 0x73, 0x2f, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f, 0x73, 0x74, 0x61, 0x63, 0x68, 0x2f, 0x76, 0x33,
	0xaa, 0x02, 0x19, 0x46, 0x61, 0x63, 0x74, 0x53, 0x65, 0x74, 0x2e, 0x50, 0x72, 0x6f, 0x74, 0x6f,
	0x62, 0x75, 0x66, 0x2e, 0x53, 0x74, 0x61, 0x63, 0x68, 0x2e, 0x56, 0x33, 0x62, 0x06, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_fds_protobuf_stach_v3_TableView_proto_rawDescOnce sync.Once
	file_fds_protobuf_stach_v3_TableView_proto_rawDescData = file_fds_protobuf_stach_v3_TableView_proto_rawDesc
)

func file_fds_protobuf_stach_v3_TableView_proto_rawDescGZIP() []byte {
	file_fds_protobuf_stach_v3_TableView_proto_rawDescOnce.Do(func() {
		file_fds_protobuf_stach_v3_TableView_proto_rawDescData = protoimpl.X.CompressGZIP(file_fds_protobuf_stach_v3_TableView_proto_rawDescData)
	})
	return file_fds_protobuf_stach_v3_TableView_proto_rawDescData
}

var file_fds_protobuf_stach_v3_TableView_proto_msgTypes = make([]protoimpl.MessageInfo, 7)
var file_fds_protobuf_stach_v3_TableView_proto_goTypes = []interface{}{
	(*TableView)(nil),                 // 0: factset.protobuf.stach.v3.TableView
	(*TableView_Group)(nil),           // 1: factset.protobuf.stach.v3.TableView.Group
	(*TableView_CollapsedColumn)(nil), // 2: factset.protobuf.stach.v3.TableView.CollapsedColumn
	(*TableView_Split)(nil),           // 3: factset.protobuf.stach.v3.TableView.Split
	nil,                               // 4: factset.protobuf.stach.v3.TableView.HeadersEntry
	nil,                               // 5: factset.protobuf.stach.v3.TableView.CustomMetadataEntry
	nil,                               // 6: factset.protobuf.stach.v3.TableView.Split.HeadersEntry
	(*MetadataItem)(nil),              // 7: factset.protobuf.stach.v3.MetadataItem
}
var file_fds_protobuf_stach_v3_TableView_proto_depIdxs = []int32{
	4, // 0: factset.protobuf.stach.v3.TableView.headers:type_name -> factset.protobuf.stach.v3.TableView.HeadersEntry
	1, // 1: factset.protobuf.stach.v3.TableView.group:type_name -> factset.protobuf.stach.v3.TableView.Group
	3, // 2: factset.protobuf.stach.v3.TableView.split:type_name -> factset.protobuf.stach.v3.TableView.Split
	5, // 3: factset.protobuf.stach.v3.TableView.custom_metadata:type_name -> factset.protobuf.stach.v3.TableView.CustomMetadataEntry
	2, // 4: factset.protobuf.stach.v3.TableView.Group.collapsed_column:type_name -> factset.protobuf.stach.v3.TableView.CollapsedColumn
	6, // 5: factset.protobuf.stach.v3.TableView.Split.headers:type_name -> factset.protobuf.stach.v3.TableView.Split.HeadersEntry
	7, // 6: factset.protobuf.stach.v3.TableView.CustomMetadataEntry.value:type_name -> factset.protobuf.stach.v3.MetadataItem
	7, // [7:7] is the sub-list for method output_type
	7, // [7:7] is the sub-list for method input_type
	7, // [7:7] is the sub-list for extension type_name
	7, // [7:7] is the sub-list for extension extendee
	0, // [0:7] is the sub-list for field type_name
}

func init() { file_fds_protobuf_stach_v3_TableView_proto_init() }
func file_fds_protobuf_stach_v3_TableView_proto_init() {
	if File_fds_protobuf_stach_v3_TableView_proto != nil {
		return
	}
	file_fds_protobuf_stach_v3_MetadataItem_proto_init()
	if !protoimpl.UnsafeEnabled {
		file_fds_protobuf_stach_v3_TableView_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*TableView); i {
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
		file_fds_protobuf_stach_v3_TableView_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*TableView_Group); i {
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
		file_fds_protobuf_stach_v3_TableView_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*TableView_CollapsedColumn); i {
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
		file_fds_protobuf_stach_v3_TableView_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*TableView_Split); i {
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
			RawDescriptor: file_fds_protobuf_stach_v3_TableView_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   7,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_fds_protobuf_stach_v3_TableView_proto_goTypes,
		DependencyIndexes: file_fds_protobuf_stach_v3_TableView_proto_depIdxs,
		MessageInfos:      file_fds_protobuf_stach_v3_TableView_proto_msgTypes,
	}.Build()
	File_fds_protobuf_stach_v3_TableView_proto = out.File
	file_fds_protobuf_stach_v3_TableView_proto_rawDesc = nil
	file_fds_protobuf_stach_v3_TableView_proto_goTypes = nil
	file_fds_protobuf_stach_v3_TableView_proto_depIdxs = nil
}

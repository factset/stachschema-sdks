// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.27.1-devel
// 	protoc        v3.12.3
// source: fds/protobuf/stach/v2/table/MetadataCollection.proto

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

// A collection of metadata for a table
type MetadataCollection struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// The metadata items associated with a table
	Items map[string]*MetadataItem `protobuf:"bytes,1,rep,name=items,proto3" json:"items,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
	// The locations where metadata items are associated
	Locations *MetadataLocations `protobuf:"bytes,2,opt,name=locations,proto3" json:"locations,omitempty"`
}

func (x *MetadataCollection) Reset() {
	*x = MetadataCollection{}
	if protoimpl.UnsafeEnabled {
		mi := &file_fds_protobuf_stach_v2_table_MetadataCollection_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *MetadataCollection) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*MetadataCollection) ProtoMessage() {}

func (x *MetadataCollection) ProtoReflect() protoreflect.Message {
	mi := &file_fds_protobuf_stach_v2_table_MetadataCollection_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use MetadataCollection.ProtoReflect.Descriptor instead.
func (*MetadataCollection) Descriptor() ([]byte, []int) {
	return file_fds_protobuf_stach_v2_table_MetadataCollection_proto_rawDescGZIP(), []int{0}
}

func (x *MetadataCollection) GetItems() map[string]*MetadataItem {
	if x != nil {
		return x.Items
	}
	return nil
}

func (x *MetadataCollection) GetLocations() *MetadataLocations {
	if x != nil {
		return x.Locations
	}
	return nil
}

var File_fds_protobuf_stach_v2_table_MetadataCollection_proto protoreflect.FileDescriptor

var file_fds_protobuf_stach_v2_table_MetadataCollection_proto_rawDesc = []byte{
	0x0a, 0x34, 0x66, 0x64, 0x73, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f, 0x73,
	0x74, 0x61, 0x63, 0x68, 0x2f, 0x76, 0x32, 0x2f, 0x74, 0x61, 0x62, 0x6c, 0x65, 0x2f, 0x4d, 0x65,
	0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x43, 0x6f, 0x6c, 0x6c, 0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e,
	0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x1f, 0x66, 0x61, 0x63, 0x74, 0x73, 0x65, 0x74, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x73, 0x74, 0x61, 0x63, 0x68, 0x2e, 0x76,
	0x32, 0x2e, 0x74, 0x61, 0x62, 0x6c, 0x65, 0x1a, 0x2e, 0x66, 0x64, 0x73, 0x2f, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f, 0x73, 0x74, 0x61, 0x63, 0x68, 0x2f, 0x76, 0x32, 0x2f, 0x74,
	0x61, 0x62, 0x6c, 0x65, 0x2f, 0x4d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x49, 0x74, 0x65,
	0x6d, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x33, 0x66, 0x64, 0x73, 0x2f, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f, 0x73, 0x74, 0x61, 0x63, 0x68, 0x2f, 0x76, 0x32, 0x2f, 0x74,
	0x61, 0x62, 0x6c, 0x65, 0x2f, 0x4d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x4c, 0x6f, 0x63,
	0x61, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0xa5, 0x02, 0x0a,
	0x12, 0x4d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x43, 0x6f, 0x6c, 0x6c, 0x65, 0x63, 0x74,
	0x69, 0x6f, 0x6e, 0x12, 0x54, 0x0a, 0x05, 0x69, 0x74, 0x65, 0x6d, 0x73, 0x18, 0x01, 0x20, 0x03,
	0x28, 0x0b, 0x32, 0x3e, 0x2e, 0x66, 0x61, 0x63, 0x74, 0x73, 0x65, 0x74, 0x2e, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x73, 0x74, 0x61, 0x63, 0x68, 0x2e, 0x76, 0x32, 0x2e, 0x74,
	0x61, 0x62, 0x6c, 0x65, 0x2e, 0x4d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x43, 0x6f, 0x6c,
	0x6c, 0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x2e, 0x49, 0x74, 0x65, 0x6d, 0x73, 0x45, 0x6e, 0x74,
	0x72, 0x79, 0x52, 0x05, 0x69, 0x74, 0x65, 0x6d, 0x73, 0x12, 0x50, 0x0a, 0x09, 0x6c, 0x6f, 0x63,
	0x61, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x32, 0x2e, 0x66,
	0x61, 0x63, 0x74, 0x73, 0x65, 0x74, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e,
	0x73, 0x74, 0x61, 0x63, 0x68, 0x2e, 0x76, 0x32, 0x2e, 0x74, 0x61, 0x62, 0x6c, 0x65, 0x2e, 0x4d,
	0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x4c, 0x6f, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x73,
	0x52, 0x09, 0x6c, 0x6f, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x1a, 0x67, 0x0a, 0x0a, 0x49,
	0x74, 0x65, 0x6d, 0x73, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x12, 0x10, 0x0a, 0x03, 0x6b, 0x65, 0x79,
	0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x03, 0x6b, 0x65, 0x79, 0x12, 0x43, 0x0a, 0x05, 0x76,
	0x61, 0x6c, 0x75, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x2d, 0x2e, 0x66, 0x61, 0x63,
	0x74, 0x73, 0x65, 0x74, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x73, 0x74,
	0x61, 0x63, 0x68, 0x2e, 0x76, 0x32, 0x2e, 0x74, 0x61, 0x62, 0x6c, 0x65, 0x2e, 0x4d, 0x65, 0x74,
	0x61, 0x64, 0x61, 0x74, 0x61, 0x49, 0x74, 0x65, 0x6d, 0x52, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65,
	0x3a, 0x02, 0x38, 0x01, 0x42, 0xa4, 0x01, 0x0a, 0x23, 0x63, 0x6f, 0x6d, 0x2e, 0x66, 0x61, 0x63,
	0x74, 0x73, 0x65, 0x74, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x73, 0x74,
	0x61, 0x63, 0x68, 0x2e, 0x76, 0x32, 0x2e, 0x74, 0x61, 0x62, 0x6c, 0x65, 0x42, 0x17, 0x4d, 0x65,
	0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x43, 0x6f, 0x6c, 0x6c, 0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e,
	0x50, 0x72, 0x6f, 0x74, 0x6f, 0x5a, 0x42, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f,
	0x6d, 0x2f, 0x66, 0x61, 0x63, 0x74, 0x73, 0x65, 0x74, 0x2f, 0x73, 0x74, 0x61, 0x63, 0x68, 0x73,
	0x63, 0x68, 0x65, 0x6d, 0x61, 0x2d, 0x73, 0x64, 0x6b, 0x73, 0x2f, 0x67, 0x6f, 0x2f, 0x66, 0x64,
	0x73, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f, 0x73, 0x74, 0x61, 0x63, 0x68,
	0x2f, 0x76, 0x32, 0x2f, 0x74, 0x61, 0x62, 0x6c, 0x65, 0xaa, 0x02, 0x1f, 0x46, 0x61, 0x63, 0x74,
	0x53, 0x65, 0x74, 0x2e, 0x50, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x53, 0x74, 0x61,
	0x63, 0x68, 0x2e, 0x56, 0x32, 0x2e, 0x54, 0x61, 0x62, 0x6c, 0x65, 0x62, 0x06, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x33,
}

var (
	file_fds_protobuf_stach_v2_table_MetadataCollection_proto_rawDescOnce sync.Once
	file_fds_protobuf_stach_v2_table_MetadataCollection_proto_rawDescData = file_fds_protobuf_stach_v2_table_MetadataCollection_proto_rawDesc
)

func file_fds_protobuf_stach_v2_table_MetadataCollection_proto_rawDescGZIP() []byte {
	file_fds_protobuf_stach_v2_table_MetadataCollection_proto_rawDescOnce.Do(func() {
		file_fds_protobuf_stach_v2_table_MetadataCollection_proto_rawDescData = protoimpl.X.CompressGZIP(file_fds_protobuf_stach_v2_table_MetadataCollection_proto_rawDescData)
	})
	return file_fds_protobuf_stach_v2_table_MetadataCollection_proto_rawDescData
}

var file_fds_protobuf_stach_v2_table_MetadataCollection_proto_msgTypes = make([]protoimpl.MessageInfo, 2)
var file_fds_protobuf_stach_v2_table_MetadataCollection_proto_goTypes = []interface{}{
	(*MetadataCollection)(nil), // 0: factset.protobuf.stach.v2.table.MetadataCollection
	nil,                        // 1: factset.protobuf.stach.v2.table.MetadataCollection.ItemsEntry
	(*MetadataLocations)(nil),  // 2: factset.protobuf.stach.v2.table.MetadataLocations
	(*MetadataItem)(nil),       // 3: factset.protobuf.stach.v2.table.MetadataItem
}
var file_fds_protobuf_stach_v2_table_MetadataCollection_proto_depIdxs = []int32{
	1, // 0: factset.protobuf.stach.v2.table.MetadataCollection.items:type_name -> factset.protobuf.stach.v2.table.MetadataCollection.ItemsEntry
	2, // 1: factset.protobuf.stach.v2.table.MetadataCollection.locations:type_name -> factset.protobuf.stach.v2.table.MetadataLocations
	3, // 2: factset.protobuf.stach.v2.table.MetadataCollection.ItemsEntry.value:type_name -> factset.protobuf.stach.v2.table.MetadataItem
	3, // [3:3] is the sub-list for method output_type
	3, // [3:3] is the sub-list for method input_type
	3, // [3:3] is the sub-list for extension type_name
	3, // [3:3] is the sub-list for extension extendee
	0, // [0:3] is the sub-list for field type_name
}

func init() { file_fds_protobuf_stach_v2_table_MetadataCollection_proto_init() }
func file_fds_protobuf_stach_v2_table_MetadataCollection_proto_init() {
	if File_fds_protobuf_stach_v2_table_MetadataCollection_proto != nil {
		return
	}
	file_fds_protobuf_stach_v2_table_MetadataItem_proto_init()
	file_fds_protobuf_stach_v2_table_MetadataLocations_proto_init()
	if !protoimpl.UnsafeEnabled {
		file_fds_protobuf_stach_v2_table_MetadataCollection_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*MetadataCollection); i {
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
			RawDescriptor: file_fds_protobuf_stach_v2_table_MetadataCollection_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   2,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_fds_protobuf_stach_v2_table_MetadataCollection_proto_goTypes,
		DependencyIndexes: file_fds_protobuf_stach_v2_table_MetadataCollection_proto_depIdxs,
		MessageInfos:      file_fds_protobuf_stach_v2_table_MetadataCollection_proto_msgTypes,
	}.Build()
	File_fds_protobuf_stach_v2_table_MetadataCollection_proto = out.File
	file_fds_protobuf_stach_v2_table_MetadataCollection_proto_rawDesc = nil
	file_fds_protobuf_stach_v2_table_MetadataCollection_proto_goTypes = nil
	file_fds_protobuf_stach_v2_table_MetadataCollection_proto_depIdxs = nil
}

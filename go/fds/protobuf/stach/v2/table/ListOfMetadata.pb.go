// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.27.1-devel
// 	protoc        v3.12.3
// source: fds/protobuf/stach/v2/table/ListOfMetadata.proto

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

// A list of metadata ids
type ListOfMetadata struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// The list of metadata ids
	Ids []string `protobuf:"bytes,1,rep,name=ids,proto3" json:"ids,omitempty"`
}

func (x *ListOfMetadata) Reset() {
	*x = ListOfMetadata{}
	if protoimpl.UnsafeEnabled {
		mi := &file_fds_protobuf_stach_v2_table_ListOfMetadata_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ListOfMetadata) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ListOfMetadata) ProtoMessage() {}

func (x *ListOfMetadata) ProtoReflect() protoreflect.Message {
	mi := &file_fds_protobuf_stach_v2_table_ListOfMetadata_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ListOfMetadata.ProtoReflect.Descriptor instead.
func (*ListOfMetadata) Descriptor() ([]byte, []int) {
	return file_fds_protobuf_stach_v2_table_ListOfMetadata_proto_rawDescGZIP(), []int{0}
}

func (x *ListOfMetadata) GetIds() []string {
	if x != nil {
		return x.Ids
	}
	return nil
}

var File_fds_protobuf_stach_v2_table_ListOfMetadata_proto protoreflect.FileDescriptor

var file_fds_protobuf_stach_v2_table_ListOfMetadata_proto_rawDesc = []byte{
	0x0a, 0x30, 0x66, 0x64, 0x73, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f, 0x73,
	0x74, 0x61, 0x63, 0x68, 0x2f, 0x76, 0x32, 0x2f, 0x74, 0x61, 0x62, 0x6c, 0x65, 0x2f, 0x4c, 0x69,
	0x73, 0x74, 0x4f, 0x66, 0x4d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x2e, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x12, 0x1f, 0x66, 0x61, 0x63, 0x74, 0x73, 0x65, 0x74, 0x2e, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x62, 0x75, 0x66, 0x2e, 0x73, 0x74, 0x61, 0x63, 0x68, 0x2e, 0x76, 0x32, 0x2e, 0x74, 0x61,
	0x62, 0x6c, 0x65, 0x22, 0x22, 0x0a, 0x0e, 0x4c, 0x69, 0x73, 0x74, 0x4f, 0x66, 0x4d, 0x65, 0x74,
	0x61, 0x64, 0x61, 0x74, 0x61, 0x12, 0x10, 0x0a, 0x03, 0x69, 0x64, 0x73, 0x18, 0x01, 0x20, 0x03,
	0x28, 0x09, 0x52, 0x03, 0x69, 0x64, 0x73, 0x42, 0xa0, 0x01, 0x0a, 0x23, 0x63, 0x6f, 0x6d, 0x2e,
	0x66, 0x61, 0x63, 0x74, 0x73, 0x65, 0x74, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66,
	0x2e, 0x73, 0x74, 0x61, 0x63, 0x68, 0x2e, 0x76, 0x32, 0x2e, 0x74, 0x61, 0x62, 0x6c, 0x65, 0x42,
	0x13, 0x4c, 0x69, 0x73, 0x74, 0x4f, 0x66, 0x4d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x50,
	0x72, 0x6f, 0x74, 0x6f, 0x5a, 0x42, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d,
	0x2f, 0x66, 0x61, 0x63, 0x74, 0x73, 0x65, 0x74, 0x2f, 0x73, 0x74, 0x61, 0x63, 0x68, 0x73, 0x63,
	0x68, 0x65, 0x6d, 0x61, 0x2d, 0x73, 0x64, 0x6b, 0x73, 0x2f, 0x67, 0x6f, 0x2f, 0x66, 0x64, 0x73,
	0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f, 0x73, 0x74, 0x61, 0x63, 0x68, 0x2f,
	0x76, 0x32, 0x2f, 0x74, 0x61, 0x62, 0x6c, 0x65, 0xaa, 0x02, 0x1f, 0x46, 0x61, 0x63, 0x74, 0x53,
	0x65, 0x74, 0x2e, 0x50, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x53, 0x74, 0x61, 0x63,
	0x68, 0x2e, 0x56, 0x32, 0x2e, 0x54, 0x61, 0x62, 0x6c, 0x65, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x33,
}

var (
	file_fds_protobuf_stach_v2_table_ListOfMetadata_proto_rawDescOnce sync.Once
	file_fds_protobuf_stach_v2_table_ListOfMetadata_proto_rawDescData = file_fds_protobuf_stach_v2_table_ListOfMetadata_proto_rawDesc
)

func file_fds_protobuf_stach_v2_table_ListOfMetadata_proto_rawDescGZIP() []byte {
	file_fds_protobuf_stach_v2_table_ListOfMetadata_proto_rawDescOnce.Do(func() {
		file_fds_protobuf_stach_v2_table_ListOfMetadata_proto_rawDescData = protoimpl.X.CompressGZIP(file_fds_protobuf_stach_v2_table_ListOfMetadata_proto_rawDescData)
	})
	return file_fds_protobuf_stach_v2_table_ListOfMetadata_proto_rawDescData
}

var file_fds_protobuf_stach_v2_table_ListOfMetadata_proto_msgTypes = make([]protoimpl.MessageInfo, 1)
var file_fds_protobuf_stach_v2_table_ListOfMetadata_proto_goTypes = []interface{}{
	(*ListOfMetadata)(nil), // 0: factset.protobuf.stach.v2.table.ListOfMetadata
}
var file_fds_protobuf_stach_v2_table_ListOfMetadata_proto_depIdxs = []int32{
	0, // [0:0] is the sub-list for method output_type
	0, // [0:0] is the sub-list for method input_type
	0, // [0:0] is the sub-list for extension type_name
	0, // [0:0] is the sub-list for extension extendee
	0, // [0:0] is the sub-list for field type_name
}

func init() { file_fds_protobuf_stach_v2_table_ListOfMetadata_proto_init() }
func file_fds_protobuf_stach_v2_table_ListOfMetadata_proto_init() {
	if File_fds_protobuf_stach_v2_table_ListOfMetadata_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_fds_protobuf_stach_v2_table_ListOfMetadata_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ListOfMetadata); i {
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
			RawDescriptor: file_fds_protobuf_stach_v2_table_ListOfMetadata_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   1,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_fds_protobuf_stach_v2_table_ListOfMetadata_proto_goTypes,
		DependencyIndexes: file_fds_protobuf_stach_v2_table_ListOfMetadata_proto_depIdxs,
		MessageInfos:      file_fds_protobuf_stach_v2_table_ListOfMetadata_proto_msgTypes,
	}.Build()
	File_fds_protobuf_stach_v2_table_ListOfMetadata_proto = out.File
	file_fds_protobuf_stach_v2_table_ListOfMetadata_proto_rawDesc = nil
	file_fds_protobuf_stach_v2_table_ListOfMetadata_proto_goTypes = nil
	file_fds_protobuf_stach_v2_table_ListOfMetadata_proto_depIdxs = nil
}

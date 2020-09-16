// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.23.0-devel
// 	protoc        v3.11.4
// source: fds/protobuf/stach/table/VerticalAlignment.proto

package table

import (
	proto "github.com/golang/protobuf/proto"
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

// This is a compile-time assertion that a sufficiently up-to-date version
// of the legacy proto package is being used.
const _ = proto.ProtoPackageIsVersion4

// A vertical alignment
type VerticalAlignment int32

const (
	VerticalAlignment_UNKNOWN_VALIGN VerticalAlignment = 0 // This value should never be used, but exists to ensure that a value is specified
	VerticalAlignment_TOP            VerticalAlignment = 1 // Value is vertically aligned to the top of the cell
	VerticalAlignment_MIDDLE         VerticalAlignment = 2 // Value is vertically aligned to the middle of the cell
	VerticalAlignment_BOTTOM         VerticalAlignment = 3 // Value is vertically aligned to the bottom of the cell
)

// Enum value maps for VerticalAlignment.
var (
	VerticalAlignment_name = map[int32]string{
		0: "UNKNOWN_VALIGN",
		1: "TOP",
		2: "MIDDLE",
		3: "BOTTOM",
	}
	VerticalAlignment_value = map[string]int32{
		"UNKNOWN_VALIGN": 0,
		"TOP":            1,
		"MIDDLE":         2,
		"BOTTOM":         3,
	}
)

func (x VerticalAlignment) Enum() *VerticalAlignment {
	p := new(VerticalAlignment)
	*p = x
	return p
}

func (x VerticalAlignment) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (VerticalAlignment) Descriptor() protoreflect.EnumDescriptor {
	return file_fds_protobuf_stach_table_VerticalAlignment_proto_enumTypes[0].Descriptor()
}

func (VerticalAlignment) Type() protoreflect.EnumType {
	return &file_fds_protobuf_stach_table_VerticalAlignment_proto_enumTypes[0]
}

func (x VerticalAlignment) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use VerticalAlignment.Descriptor instead.
func (VerticalAlignment) EnumDescriptor() ([]byte, []int) {
	return file_fds_protobuf_stach_table_VerticalAlignment_proto_rawDescGZIP(), []int{0}
}

var File_fds_protobuf_stach_table_VerticalAlignment_proto protoreflect.FileDescriptor

var file_fds_protobuf_stach_table_VerticalAlignment_proto_rawDesc = []byte{
	0x0a, 0x30, 0x66, 0x64, 0x73, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f, 0x73,
	0x74, 0x61, 0x63, 0x68, 0x2f, 0x74, 0x61, 0x62, 0x6c, 0x65, 0x2f, 0x56, 0x65, 0x72, 0x74, 0x69,
	0x63, 0x61, 0x6c, 0x41, 0x6c, 0x69, 0x67, 0x6e, 0x6d, 0x65, 0x6e, 0x74, 0x2e, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x12, 0x1c, 0x66, 0x61, 0x63, 0x74, 0x73, 0x65, 0x74, 0x2e, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x62, 0x75, 0x66, 0x2e, 0x73, 0x74, 0x61, 0x63, 0x68, 0x2e, 0x74, 0x61, 0x62, 0x6c, 0x65,
	0x2a, 0x48, 0x0a, 0x11, 0x56, 0x65, 0x72, 0x74, 0x69, 0x63, 0x61, 0x6c, 0x41, 0x6c, 0x69, 0x67,
	0x6e, 0x6d, 0x65, 0x6e, 0x74, 0x12, 0x12, 0x0a, 0x0e, 0x55, 0x4e, 0x4b, 0x4e, 0x4f, 0x57, 0x4e,
	0x5f, 0x56, 0x41, 0x4c, 0x49, 0x47, 0x4e, 0x10, 0x00, 0x12, 0x07, 0x0a, 0x03, 0x54, 0x4f, 0x50,
	0x10, 0x01, 0x12, 0x0a, 0x0a, 0x06, 0x4d, 0x49, 0x44, 0x44, 0x4c, 0x45, 0x10, 0x02, 0x12, 0x0a,
	0x0a, 0x06, 0x42, 0x4f, 0x54, 0x54, 0x4f, 0x4d, 0x10, 0x03, 0x42, 0x98, 0x01, 0x0a, 0x20, 0x63,
	0x6f, 0x6d, 0x2e, 0x66, 0x61, 0x63, 0x74, 0x73, 0x65, 0x74, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x62, 0x75, 0x66, 0x2e, 0x73, 0x74, 0x61, 0x63, 0x68, 0x2e, 0x74, 0x61, 0x62, 0x6c, 0x65, 0x42,
	0x16, 0x56, 0x65, 0x72, 0x74, 0x69, 0x63, 0x61, 0x6c, 0x41, 0x6c, 0x69, 0x67, 0x6e, 0x6d, 0x65,
	0x6e, 0x74, 0x50, 0x72, 0x6f, 0x74, 0x6f, 0x5a, 0x3d, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e,
	0x63, 0x6f, 0x6d, 0x2f, 0x66, 0x61, 0x63, 0x74, 0x73, 0x65, 0x74, 0x2f, 0x73, 0x74, 0x61, 0x63,
	0x68, 0x73, 0x63, 0x68, 0x65, 0x6d, 0x61, 0x2f, 0x67, 0x6f, 0x2f, 0x76, 0x32, 0x2f, 0x66, 0x64,
	0x73, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f, 0x73, 0x74, 0x61, 0x63, 0x68,
	0x2f, 0x74, 0x61, 0x62, 0x6c, 0x65, 0xaa, 0x02, 0x1c, 0x46, 0x61, 0x63, 0x74, 0x53, 0x65, 0x74,
	0x2e, 0x50, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x53, 0x74, 0x61, 0x63, 0x68, 0x2e,
	0x54, 0x61, 0x62, 0x6c, 0x65, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_fds_protobuf_stach_table_VerticalAlignment_proto_rawDescOnce sync.Once
	file_fds_protobuf_stach_table_VerticalAlignment_proto_rawDescData = file_fds_protobuf_stach_table_VerticalAlignment_proto_rawDesc
)

func file_fds_protobuf_stach_table_VerticalAlignment_proto_rawDescGZIP() []byte {
	file_fds_protobuf_stach_table_VerticalAlignment_proto_rawDescOnce.Do(func() {
		file_fds_protobuf_stach_table_VerticalAlignment_proto_rawDescData = protoimpl.X.CompressGZIP(file_fds_protobuf_stach_table_VerticalAlignment_proto_rawDescData)
	})
	return file_fds_protobuf_stach_table_VerticalAlignment_proto_rawDescData
}

var file_fds_protobuf_stach_table_VerticalAlignment_proto_enumTypes = make([]protoimpl.EnumInfo, 1)
var file_fds_protobuf_stach_table_VerticalAlignment_proto_goTypes = []interface{}{
	(VerticalAlignment)(0), // 0: factset.protobuf.stach.table.VerticalAlignment
}
var file_fds_protobuf_stach_table_VerticalAlignment_proto_depIdxs = []int32{
	0, // [0:0] is the sub-list for method output_type
	0, // [0:0] is the sub-list for method input_type
	0, // [0:0] is the sub-list for extension type_name
	0, // [0:0] is the sub-list for extension extendee
	0, // [0:0] is the sub-list for field type_name
}

func init() { file_fds_protobuf_stach_table_VerticalAlignment_proto_init() }
func file_fds_protobuf_stach_table_VerticalAlignment_proto_init() {
	if File_fds_protobuf_stach_table_VerticalAlignment_proto != nil {
		return
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_fds_protobuf_stach_table_VerticalAlignment_proto_rawDesc,
			NumEnums:      1,
			NumMessages:   0,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_fds_protobuf_stach_table_VerticalAlignment_proto_goTypes,
		DependencyIndexes: file_fds_protobuf_stach_table_VerticalAlignment_proto_depIdxs,
		EnumInfos:         file_fds_protobuf_stach_table_VerticalAlignment_proto_enumTypes,
	}.Build()
	File_fds_protobuf_stach_table_VerticalAlignment_proto = out.File
	file_fds_protobuf_stach_table_VerticalAlignment_proto_rawDesc = nil
	file_fds_protobuf_stach_table_VerticalAlignment_proto_goTypes = nil
	file_fds_protobuf_stach_table_VerticalAlignment_proto_depIdxs = nil
}

// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: fds/protobuf/stach/v2/table/ReferenceType.proto

package com.factset.protobuf.stach.v2.table;

public final class ReferenceTypeProto {
  private ReferenceTypeProto() {}
  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistryLite registry) {
  }

  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistry registry) {
    registerAllExtensions(
        (com.google.protobuf.ExtensionRegistryLite) registry);
  }
  /**
   * <pre>
   * The type of table reference
   * </pre>
   *
   * Protobuf enum {@code factset.protobuf.stach.v2.table.ReferenceType}
   */
  public enum ReferenceType
      implements com.google.protobuf.ProtocolMessageEnum {
    /**
     * <pre>
     * This value should never be used, but exists to ensure that a value is specified
     * </pre>
     *
     * <code>UNKNOWN_REFERENCE_TYPE = 0;</code>
     */
    UNKNOWN_REFERENCE_TYPE(0),
    /**
     * <pre>
     * The table reference
     * </pre>
     *
     * <code>TABLE = 1;</code>
     */
    TABLE(1),
    /**
     * <pre>
     * The column reference
     * </pre>
     *
     * <code>COLUMN = 2;</code>
     */
    COLUMN(2),
    /**
     * <pre>
     * The row reference
     * </pre>
     *
     * <code>ROW = 3;</code>
     */
    ROW(3),
    /**
     * <pre>
     * The cell reference
     * </pre>
     *
     * <code>CELL = 4;</code>
     */
    CELL(4),
    UNRECOGNIZED(-1),
    ;

    /**
     * <pre>
     * This value should never be used, but exists to ensure that a value is specified
     * </pre>
     *
     * <code>UNKNOWN_REFERENCE_TYPE = 0;</code>
     */
    public static final int UNKNOWN_REFERENCE_TYPE_VALUE = 0;
    /**
     * <pre>
     * The table reference
     * </pre>
     *
     * <code>TABLE = 1;</code>
     */
    public static final int TABLE_VALUE = 1;
    /**
     * <pre>
     * The column reference
     * </pre>
     *
     * <code>COLUMN = 2;</code>
     */
    public static final int COLUMN_VALUE = 2;
    /**
     * <pre>
     * The row reference
     * </pre>
     *
     * <code>ROW = 3;</code>
     */
    public static final int ROW_VALUE = 3;
    /**
     * <pre>
     * The cell reference
     * </pre>
     *
     * <code>CELL = 4;</code>
     */
    public static final int CELL_VALUE = 4;


    public final int getNumber() {
      if (this == UNRECOGNIZED) {
        throw new java.lang.IllegalArgumentException(
            "Can't get the number of an unknown enum value.");
      }
      return value;
    }

    /**
     * @param value The numeric wire value of the corresponding enum entry.
     * @return The enum associated with the given numeric wire value.
     * @deprecated Use {@link #forNumber(int)} instead.
     */
    @java.lang.Deprecated
    public static ReferenceType valueOf(int value) {
      return forNumber(value);
    }

    /**
     * @param value The numeric wire value of the corresponding enum entry.
     * @return The enum associated with the given numeric wire value.
     */
    public static ReferenceType forNumber(int value) {
      switch (value) {
        case 0: return UNKNOWN_REFERENCE_TYPE;
        case 1: return TABLE;
        case 2: return COLUMN;
        case 3: return ROW;
        case 4: return CELL;
        default: return null;
      }
    }

    public static com.google.protobuf.Internal.EnumLiteMap<ReferenceType>
        internalGetValueMap() {
      return internalValueMap;
    }
    private static final com.google.protobuf.Internal.EnumLiteMap<
        ReferenceType> internalValueMap =
          new com.google.protobuf.Internal.EnumLiteMap<ReferenceType>() {
            public ReferenceType findValueByNumber(int number) {
              return ReferenceType.forNumber(number);
            }
          };

    public final com.google.protobuf.Descriptors.EnumValueDescriptor
        getValueDescriptor() {
      if (this == UNRECOGNIZED) {
        throw new java.lang.IllegalStateException(
            "Can't get the descriptor of an unrecognized enum value.");
      }
      return getDescriptor().getValues().get(ordinal());
    }
    public final com.google.protobuf.Descriptors.EnumDescriptor
        getDescriptorForType() {
      return getDescriptor();
    }
    public static final com.google.protobuf.Descriptors.EnumDescriptor
        getDescriptor() {
      return com.factset.protobuf.stach.v2.table.ReferenceTypeProto.getDescriptor().getEnumTypes().get(0);
    }

    private static final ReferenceType[] VALUES = values();

    public static ReferenceType valueOf(
        com.google.protobuf.Descriptors.EnumValueDescriptor desc) {
      if (desc.getType() != getDescriptor()) {
        throw new java.lang.IllegalArgumentException(
          "EnumValueDescriptor is not for this type.");
      }
      if (desc.getIndex() == -1) {
        return UNRECOGNIZED;
      }
      return VALUES[desc.getIndex()];
    }

    private final int value;

    private ReferenceType(int value) {
      this.value = value;
    }

    // @@protoc_insertion_point(enum_scope:factset.protobuf.stach.v2.table.ReferenceType)
  }


  public static com.google.protobuf.Descriptors.FileDescriptor
      getDescriptor() {
    return descriptor;
  }
  private static  com.google.protobuf.Descriptors.FileDescriptor
      descriptor;
  static {
    java.lang.String[] descriptorData = {
      "\n/fds/protobuf/stach/v2/table/ReferenceT" +
      "ype.proto\022\037factset.protobuf.stach.v2.tab" +
      "le*U\n\rReferenceType\022\032\n\026UNKNOWN_REFERENCE" +
      "_TYPE\020\000\022\t\n\005TABLE\020\001\022\n\n\006COLUMN\020\002\022\007\n\003ROW\020\003\022" +
      "\010\n\004CELL\020\004B\237\001\n#com.factset.protobuf.stach" +
      ".v2.tableB\022ReferenceTypeProtoZBgithub.co" +
      "m/factset/stachschema-sdks/go/fds/protob" +
      "uf/stach/v2/table\252\002\037FactSet.Protobuf.Sta" +
      "ch.V2.Tableb\006proto3"
    };
    descriptor = com.google.protobuf.Descriptors.FileDescriptor
      .internalBuildGeneratedFileFrom(descriptorData,
        new com.google.protobuf.Descriptors.FileDescriptor[] {
        });
  }

  // @@protoc_insertion_point(outer_class_scope)
}

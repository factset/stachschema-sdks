// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: fds/protobuf/stach/v3/MetadataItem.proto

package com.factset.protobuf.stach.v3;

public final class MetadataItemProto {
  private MetadataItemProto() {}
  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistryLite registry) {
  }

  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistry registry) {
    registerAllExtensions(
        (com.google.protobuf.ExtensionRegistryLite) registry);
  }
  public interface MetadataItemOrBuilder extends
      // @@protoc_insertion_point(interface_extends:factset.protobuf.stach.v3.MetadataItem)
      com.google.protobuf.MessageOrBuilder {

    /**
     * <pre>
     *The higher level contextual type.
     *E.g. 'email', or 'id32'.
     *Required.
     * </pre>
     *
     * <code>string contextual_type = 1;</code>
     * @return The contextualType.
     */
    java.lang.String getContextualType();
    /**
     * <pre>
     *The higher level contextual type.
     *E.g. 'email', or 'id32'.
     *Required.
     * </pre>
     *
     * <code>string contextual_type = 1;</code>
     * @return The bytes for contextualType.
     */
    com.google.protobuf.ByteString
        getContextualTypeBytes();

    /**
     * <pre>
     *The value.
     *Required.
     * </pre>
     *
     * <code>.google.protobuf.Value value = 2;</code>
     * @return Whether the value field is set.
     */
    boolean hasValue();
    /**
     * <pre>
     *The value.
     *Required.
     * </pre>
     *
     * <code>.google.protobuf.Value value = 2;</code>
     * @return The value.
     */
    com.google.protobuf.Value getValue();
    /**
     * <pre>
     *The value.
     *Required.
     * </pre>
     *
     * <code>.google.protobuf.Value value = 2;</code>
     */
    com.google.protobuf.ValueOrBuilder getValueOrBuilder();
  }
  /**
   * <pre>
   *A custom metadata item.
   * </pre>
   *
   * Protobuf type {@code factset.protobuf.stach.v3.MetadataItem}
   */
  public static final class MetadataItem extends
      com.google.protobuf.GeneratedMessageV3 implements
      // @@protoc_insertion_point(message_implements:factset.protobuf.stach.v3.MetadataItem)
      MetadataItemOrBuilder {
  private static final long serialVersionUID = 0L;
    // Use MetadataItem.newBuilder() to construct.
    private MetadataItem(com.google.protobuf.GeneratedMessageV3.Builder<?> builder) {
      super(builder);
    }
    private MetadataItem() {
      contextualType_ = "";
    }

    @java.lang.Override
    @SuppressWarnings({"unused"})
    protected java.lang.Object newInstance(
        UnusedPrivateParameter unused) {
      return new MetadataItem();
    }

    @java.lang.Override
    public final com.google.protobuf.UnknownFieldSet
    getUnknownFields() {
      return this.unknownFields;
    }
    private MetadataItem(
        com.google.protobuf.CodedInputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      this();
      if (extensionRegistry == null) {
        throw new java.lang.NullPointerException();
      }
      com.google.protobuf.UnknownFieldSet.Builder unknownFields =
          com.google.protobuf.UnknownFieldSet.newBuilder();
      try {
        boolean done = false;
        while (!done) {
          int tag = input.readTag();
          switch (tag) {
            case 0:
              done = true;
              break;
            case 10: {
              java.lang.String s = input.readStringRequireUtf8();

              contextualType_ = s;
              break;
            }
            case 18: {
              com.google.protobuf.Value.Builder subBuilder = null;
              if (value_ != null) {
                subBuilder = value_.toBuilder();
              }
              value_ = input.readMessage(com.google.protobuf.Value.parser(), extensionRegistry);
              if (subBuilder != null) {
                subBuilder.mergeFrom(value_);
                value_ = subBuilder.buildPartial();
              }

              break;
            }
            default: {
              if (!parseUnknownField(
                  input, unknownFields, extensionRegistry, tag)) {
                done = true;
              }
              break;
            }
          }
        }
      } catch (com.google.protobuf.InvalidProtocolBufferException e) {
        throw e.setUnfinishedMessage(this);
      } catch (java.io.IOException e) {
        throw new com.google.protobuf.InvalidProtocolBufferException(
            e).setUnfinishedMessage(this);
      } finally {
        this.unknownFields = unknownFields.build();
        makeExtensionsImmutable();
      }
    }
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return com.factset.protobuf.stach.v3.MetadataItemProto.internal_static_factset_protobuf_stach_v3_MetadataItem_descriptor;
    }

    @java.lang.Override
    protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return com.factset.protobuf.stach.v3.MetadataItemProto.internal_static_factset_protobuf_stach_v3_MetadataItem_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              com.factset.protobuf.stach.v3.MetadataItemProto.MetadataItem.class, com.factset.protobuf.stach.v3.MetadataItemProto.MetadataItem.Builder.class);
    }

    public static final int CONTEXTUAL_TYPE_FIELD_NUMBER = 1;
    private volatile java.lang.Object contextualType_;
    /**
     * <pre>
     *The higher level contextual type.
     *E.g. 'email', or 'id32'.
     *Required.
     * </pre>
     *
     * <code>string contextual_type = 1;</code>
     * @return The contextualType.
     */
    @java.lang.Override
    public java.lang.String getContextualType() {
      java.lang.Object ref = contextualType_;
      if (ref instanceof java.lang.String) {
        return (java.lang.String) ref;
      } else {
        com.google.protobuf.ByteString bs = 
            (com.google.protobuf.ByteString) ref;
        java.lang.String s = bs.toStringUtf8();
        contextualType_ = s;
        return s;
      }
    }
    /**
     * <pre>
     *The higher level contextual type.
     *E.g. 'email', or 'id32'.
     *Required.
     * </pre>
     *
     * <code>string contextual_type = 1;</code>
     * @return The bytes for contextualType.
     */
    @java.lang.Override
    public com.google.protobuf.ByteString
        getContextualTypeBytes() {
      java.lang.Object ref = contextualType_;
      if (ref instanceof java.lang.String) {
        com.google.protobuf.ByteString b = 
            com.google.protobuf.ByteString.copyFromUtf8(
                (java.lang.String) ref);
        contextualType_ = b;
        return b;
      } else {
        return (com.google.protobuf.ByteString) ref;
      }
    }

    public static final int VALUE_FIELD_NUMBER = 2;
    private com.google.protobuf.Value value_;
    /**
     * <pre>
     *The value.
     *Required.
     * </pre>
     *
     * <code>.google.protobuf.Value value = 2;</code>
     * @return Whether the value field is set.
     */
    @java.lang.Override
    public boolean hasValue() {
      return value_ != null;
    }
    /**
     * <pre>
     *The value.
     *Required.
     * </pre>
     *
     * <code>.google.protobuf.Value value = 2;</code>
     * @return The value.
     */
    @java.lang.Override
    public com.google.protobuf.Value getValue() {
      return value_ == null ? com.google.protobuf.Value.getDefaultInstance() : value_;
    }
    /**
     * <pre>
     *The value.
     *Required.
     * </pre>
     *
     * <code>.google.protobuf.Value value = 2;</code>
     */
    @java.lang.Override
    public com.google.protobuf.ValueOrBuilder getValueOrBuilder() {
      return getValue();
    }

    private byte memoizedIsInitialized = -1;
    @java.lang.Override
    public final boolean isInitialized() {
      byte isInitialized = memoizedIsInitialized;
      if (isInitialized == 1) return true;
      if (isInitialized == 0) return false;

      memoizedIsInitialized = 1;
      return true;
    }

    @java.lang.Override
    public void writeTo(com.google.protobuf.CodedOutputStream output)
                        throws java.io.IOException {
      if (!getContextualTypeBytes().isEmpty()) {
        com.google.protobuf.GeneratedMessageV3.writeString(output, 1, contextualType_);
      }
      if (value_ != null) {
        output.writeMessage(2, getValue());
      }
      unknownFields.writeTo(output);
    }

    @java.lang.Override
    public int getSerializedSize() {
      int size = memoizedSize;
      if (size != -1) return size;

      size = 0;
      if (!getContextualTypeBytes().isEmpty()) {
        size += com.google.protobuf.GeneratedMessageV3.computeStringSize(1, contextualType_);
      }
      if (value_ != null) {
        size += com.google.protobuf.CodedOutputStream
          .computeMessageSize(2, getValue());
      }
      size += unknownFields.getSerializedSize();
      memoizedSize = size;
      return size;
    }

    @java.lang.Override
    public boolean equals(final java.lang.Object obj) {
      if (obj == this) {
       return true;
      }
      if (!(obj instanceof com.factset.protobuf.stach.v3.MetadataItemProto.MetadataItem)) {
        return super.equals(obj);
      }
      com.factset.protobuf.stach.v3.MetadataItemProto.MetadataItem other = (com.factset.protobuf.stach.v3.MetadataItemProto.MetadataItem) obj;

      if (!getContextualType()
          .equals(other.getContextualType())) return false;
      if (hasValue() != other.hasValue()) return false;
      if (hasValue()) {
        if (!getValue()
            .equals(other.getValue())) return false;
      }
      if (!unknownFields.equals(other.unknownFields)) return false;
      return true;
    }

    @java.lang.Override
    public int hashCode() {
      if (memoizedHashCode != 0) {
        return memoizedHashCode;
      }
      int hash = 41;
      hash = (19 * hash) + getDescriptor().hashCode();
      hash = (37 * hash) + CONTEXTUAL_TYPE_FIELD_NUMBER;
      hash = (53 * hash) + getContextualType().hashCode();
      if (hasValue()) {
        hash = (37 * hash) + VALUE_FIELD_NUMBER;
        hash = (53 * hash) + getValue().hashCode();
      }
      hash = (29 * hash) + unknownFields.hashCode();
      memoizedHashCode = hash;
      return hash;
    }

    public static com.factset.protobuf.stach.v3.MetadataItemProto.MetadataItem parseFrom(
        java.nio.ByteBuffer data)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return PARSER.parseFrom(data);
    }
    public static com.factset.protobuf.stach.v3.MetadataItemProto.MetadataItem parseFrom(
        java.nio.ByteBuffer data,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return PARSER.parseFrom(data, extensionRegistry);
    }
    public static com.factset.protobuf.stach.v3.MetadataItemProto.MetadataItem parseFrom(
        com.google.protobuf.ByteString data)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return PARSER.parseFrom(data);
    }
    public static com.factset.protobuf.stach.v3.MetadataItemProto.MetadataItem parseFrom(
        com.google.protobuf.ByteString data,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return PARSER.parseFrom(data, extensionRegistry);
    }
    public static com.factset.protobuf.stach.v3.MetadataItemProto.MetadataItem parseFrom(byte[] data)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return PARSER.parseFrom(data);
    }
    public static com.factset.protobuf.stach.v3.MetadataItemProto.MetadataItem parseFrom(
        byte[] data,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return PARSER.parseFrom(data, extensionRegistry);
    }
    public static com.factset.protobuf.stach.v3.MetadataItemProto.MetadataItem parseFrom(java.io.InputStream input)
        throws java.io.IOException {
      return com.google.protobuf.GeneratedMessageV3
          .parseWithIOException(PARSER, input);
    }
    public static com.factset.protobuf.stach.v3.MetadataItemProto.MetadataItem parseFrom(
        java.io.InputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws java.io.IOException {
      return com.google.protobuf.GeneratedMessageV3
          .parseWithIOException(PARSER, input, extensionRegistry);
    }
    public static com.factset.protobuf.stach.v3.MetadataItemProto.MetadataItem parseDelimitedFrom(java.io.InputStream input)
        throws java.io.IOException {
      return com.google.protobuf.GeneratedMessageV3
          .parseDelimitedWithIOException(PARSER, input);
    }
    public static com.factset.protobuf.stach.v3.MetadataItemProto.MetadataItem parseDelimitedFrom(
        java.io.InputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws java.io.IOException {
      return com.google.protobuf.GeneratedMessageV3
          .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
    }
    public static com.factset.protobuf.stach.v3.MetadataItemProto.MetadataItem parseFrom(
        com.google.protobuf.CodedInputStream input)
        throws java.io.IOException {
      return com.google.protobuf.GeneratedMessageV3
          .parseWithIOException(PARSER, input);
    }
    public static com.factset.protobuf.stach.v3.MetadataItemProto.MetadataItem parseFrom(
        com.google.protobuf.CodedInputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws java.io.IOException {
      return com.google.protobuf.GeneratedMessageV3
          .parseWithIOException(PARSER, input, extensionRegistry);
    }

    @java.lang.Override
    public Builder newBuilderForType() { return newBuilder(); }
    public static Builder newBuilder() {
      return DEFAULT_INSTANCE.toBuilder();
    }
    public static Builder newBuilder(com.factset.protobuf.stach.v3.MetadataItemProto.MetadataItem prototype) {
      return DEFAULT_INSTANCE.toBuilder().mergeFrom(prototype);
    }
    @java.lang.Override
    public Builder toBuilder() {
      return this == DEFAULT_INSTANCE
          ? new Builder() : new Builder().mergeFrom(this);
    }

    @java.lang.Override
    protected Builder newBuilderForType(
        com.google.protobuf.GeneratedMessageV3.BuilderParent parent) {
      Builder builder = new Builder(parent);
      return builder;
    }
    /**
     * <pre>
     *A custom metadata item.
     * </pre>
     *
     * Protobuf type {@code factset.protobuf.stach.v3.MetadataItem}
     */
    public static final class Builder extends
        com.google.protobuf.GeneratedMessageV3.Builder<Builder> implements
        // @@protoc_insertion_point(builder_implements:factset.protobuf.stach.v3.MetadataItem)
        com.factset.protobuf.stach.v3.MetadataItemProto.MetadataItemOrBuilder {
      public static final com.google.protobuf.Descriptors.Descriptor
          getDescriptor() {
        return com.factset.protobuf.stach.v3.MetadataItemProto.internal_static_factset_protobuf_stach_v3_MetadataItem_descriptor;
      }

      @java.lang.Override
      protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
          internalGetFieldAccessorTable() {
        return com.factset.protobuf.stach.v3.MetadataItemProto.internal_static_factset_protobuf_stach_v3_MetadataItem_fieldAccessorTable
            .ensureFieldAccessorsInitialized(
                com.factset.protobuf.stach.v3.MetadataItemProto.MetadataItem.class, com.factset.protobuf.stach.v3.MetadataItemProto.MetadataItem.Builder.class);
      }

      // Construct using com.factset.protobuf.stach.v3.MetadataItemProto.MetadataItem.newBuilder()
      private Builder() {
        maybeForceBuilderInitialization();
      }

      private Builder(
          com.google.protobuf.GeneratedMessageV3.BuilderParent parent) {
        super(parent);
        maybeForceBuilderInitialization();
      }
      private void maybeForceBuilderInitialization() {
        if (com.google.protobuf.GeneratedMessageV3
                .alwaysUseFieldBuilders) {
        }
      }
      @java.lang.Override
      public Builder clear() {
        super.clear();
        contextualType_ = "";

        if (valueBuilder_ == null) {
          value_ = null;
        } else {
          value_ = null;
          valueBuilder_ = null;
        }
        return this;
      }

      @java.lang.Override
      public com.google.protobuf.Descriptors.Descriptor
          getDescriptorForType() {
        return com.factset.protobuf.stach.v3.MetadataItemProto.internal_static_factset_protobuf_stach_v3_MetadataItem_descriptor;
      }

      @java.lang.Override
      public com.factset.protobuf.stach.v3.MetadataItemProto.MetadataItem getDefaultInstanceForType() {
        return com.factset.protobuf.stach.v3.MetadataItemProto.MetadataItem.getDefaultInstance();
      }

      @java.lang.Override
      public com.factset.protobuf.stach.v3.MetadataItemProto.MetadataItem build() {
        com.factset.protobuf.stach.v3.MetadataItemProto.MetadataItem result = buildPartial();
        if (!result.isInitialized()) {
          throw newUninitializedMessageException(result);
        }
        return result;
      }

      @java.lang.Override
      public com.factset.protobuf.stach.v3.MetadataItemProto.MetadataItem buildPartial() {
        com.factset.protobuf.stach.v3.MetadataItemProto.MetadataItem result = new com.factset.protobuf.stach.v3.MetadataItemProto.MetadataItem(this);
        result.contextualType_ = contextualType_;
        if (valueBuilder_ == null) {
          result.value_ = value_;
        } else {
          result.value_ = valueBuilder_.build();
        }
        onBuilt();
        return result;
      }

      @java.lang.Override
      public Builder clone() {
        return super.clone();
      }
      @java.lang.Override
      public Builder setField(
          com.google.protobuf.Descriptors.FieldDescriptor field,
          java.lang.Object value) {
        return super.setField(field, value);
      }
      @java.lang.Override
      public Builder clearField(
          com.google.protobuf.Descriptors.FieldDescriptor field) {
        return super.clearField(field);
      }
      @java.lang.Override
      public Builder clearOneof(
          com.google.protobuf.Descriptors.OneofDescriptor oneof) {
        return super.clearOneof(oneof);
      }
      @java.lang.Override
      public Builder setRepeatedField(
          com.google.protobuf.Descriptors.FieldDescriptor field,
          int index, java.lang.Object value) {
        return super.setRepeatedField(field, index, value);
      }
      @java.lang.Override
      public Builder addRepeatedField(
          com.google.protobuf.Descriptors.FieldDescriptor field,
          java.lang.Object value) {
        return super.addRepeatedField(field, value);
      }
      @java.lang.Override
      public Builder mergeFrom(com.google.protobuf.Message other) {
        if (other instanceof com.factset.protobuf.stach.v3.MetadataItemProto.MetadataItem) {
          return mergeFrom((com.factset.protobuf.stach.v3.MetadataItemProto.MetadataItem)other);
        } else {
          super.mergeFrom(other);
          return this;
        }
      }

      public Builder mergeFrom(com.factset.protobuf.stach.v3.MetadataItemProto.MetadataItem other) {
        if (other == com.factset.protobuf.stach.v3.MetadataItemProto.MetadataItem.getDefaultInstance()) return this;
        if (!other.getContextualType().isEmpty()) {
          contextualType_ = other.contextualType_;
          onChanged();
        }
        if (other.hasValue()) {
          mergeValue(other.getValue());
        }
        this.mergeUnknownFields(other.unknownFields);
        onChanged();
        return this;
      }

      @java.lang.Override
      public final boolean isInitialized() {
        return true;
      }

      @java.lang.Override
      public Builder mergeFrom(
          com.google.protobuf.CodedInputStream input,
          com.google.protobuf.ExtensionRegistryLite extensionRegistry)
          throws java.io.IOException {
        com.factset.protobuf.stach.v3.MetadataItemProto.MetadataItem parsedMessage = null;
        try {
          parsedMessage = PARSER.parsePartialFrom(input, extensionRegistry);
        } catch (com.google.protobuf.InvalidProtocolBufferException e) {
          parsedMessage = (com.factset.protobuf.stach.v3.MetadataItemProto.MetadataItem) e.getUnfinishedMessage();
          throw e.unwrapIOException();
        } finally {
          if (parsedMessage != null) {
            mergeFrom(parsedMessage);
          }
        }
        return this;
      }

      private java.lang.Object contextualType_ = "";
      /**
       * <pre>
       *The higher level contextual type.
       *E.g. 'email', or 'id32'.
       *Required.
       * </pre>
       *
       * <code>string contextual_type = 1;</code>
       * @return The contextualType.
       */
      public java.lang.String getContextualType() {
        java.lang.Object ref = contextualType_;
        if (!(ref instanceof java.lang.String)) {
          com.google.protobuf.ByteString bs =
              (com.google.protobuf.ByteString) ref;
          java.lang.String s = bs.toStringUtf8();
          contextualType_ = s;
          return s;
        } else {
          return (java.lang.String) ref;
        }
      }
      /**
       * <pre>
       *The higher level contextual type.
       *E.g. 'email', or 'id32'.
       *Required.
       * </pre>
       *
       * <code>string contextual_type = 1;</code>
       * @return The bytes for contextualType.
       */
      public com.google.protobuf.ByteString
          getContextualTypeBytes() {
        java.lang.Object ref = contextualType_;
        if (ref instanceof String) {
          com.google.protobuf.ByteString b = 
              com.google.protobuf.ByteString.copyFromUtf8(
                  (java.lang.String) ref);
          contextualType_ = b;
          return b;
        } else {
          return (com.google.protobuf.ByteString) ref;
        }
      }
      /**
       * <pre>
       *The higher level contextual type.
       *E.g. 'email', or 'id32'.
       *Required.
       * </pre>
       *
       * <code>string contextual_type = 1;</code>
       * @param value The contextualType to set.
       * @return This builder for chaining.
       */
      public Builder setContextualType(
          java.lang.String value) {
        if (value == null) {
    throw new NullPointerException();
  }
  
        contextualType_ = value;
        onChanged();
        return this;
      }
      /**
       * <pre>
       *The higher level contextual type.
       *E.g. 'email', or 'id32'.
       *Required.
       * </pre>
       *
       * <code>string contextual_type = 1;</code>
       * @return This builder for chaining.
       */
      public Builder clearContextualType() {
        
        contextualType_ = getDefaultInstance().getContextualType();
        onChanged();
        return this;
      }
      /**
       * <pre>
       *The higher level contextual type.
       *E.g. 'email', or 'id32'.
       *Required.
       * </pre>
       *
       * <code>string contextual_type = 1;</code>
       * @param value The bytes for contextualType to set.
       * @return This builder for chaining.
       */
      public Builder setContextualTypeBytes(
          com.google.protobuf.ByteString value) {
        if (value == null) {
    throw new NullPointerException();
  }
  checkByteStringIsUtf8(value);
        
        contextualType_ = value;
        onChanged();
        return this;
      }

      private com.google.protobuf.Value value_;
      private com.google.protobuf.SingleFieldBuilderV3<
          com.google.protobuf.Value, com.google.protobuf.Value.Builder, com.google.protobuf.ValueOrBuilder> valueBuilder_;
      /**
       * <pre>
       *The value.
       *Required.
       * </pre>
       *
       * <code>.google.protobuf.Value value = 2;</code>
       * @return Whether the value field is set.
       */
      public boolean hasValue() {
        return valueBuilder_ != null || value_ != null;
      }
      /**
       * <pre>
       *The value.
       *Required.
       * </pre>
       *
       * <code>.google.protobuf.Value value = 2;</code>
       * @return The value.
       */
      public com.google.protobuf.Value getValue() {
        if (valueBuilder_ == null) {
          return value_ == null ? com.google.protobuf.Value.getDefaultInstance() : value_;
        } else {
          return valueBuilder_.getMessage();
        }
      }
      /**
       * <pre>
       *The value.
       *Required.
       * </pre>
       *
       * <code>.google.protobuf.Value value = 2;</code>
       */
      public Builder setValue(com.google.protobuf.Value value) {
        if (valueBuilder_ == null) {
          if (value == null) {
            throw new NullPointerException();
          }
          value_ = value;
          onChanged();
        } else {
          valueBuilder_.setMessage(value);
        }

        return this;
      }
      /**
       * <pre>
       *The value.
       *Required.
       * </pre>
       *
       * <code>.google.protobuf.Value value = 2;</code>
       */
      public Builder setValue(
          com.google.protobuf.Value.Builder builderForValue) {
        if (valueBuilder_ == null) {
          value_ = builderForValue.build();
          onChanged();
        } else {
          valueBuilder_.setMessage(builderForValue.build());
        }

        return this;
      }
      /**
       * <pre>
       *The value.
       *Required.
       * </pre>
       *
       * <code>.google.protobuf.Value value = 2;</code>
       */
      public Builder mergeValue(com.google.protobuf.Value value) {
        if (valueBuilder_ == null) {
          if (value_ != null) {
            value_ =
              com.google.protobuf.Value.newBuilder(value_).mergeFrom(value).buildPartial();
          } else {
            value_ = value;
          }
          onChanged();
        } else {
          valueBuilder_.mergeFrom(value);
        }

        return this;
      }
      /**
       * <pre>
       *The value.
       *Required.
       * </pre>
       *
       * <code>.google.protobuf.Value value = 2;</code>
       */
      public Builder clearValue() {
        if (valueBuilder_ == null) {
          value_ = null;
          onChanged();
        } else {
          value_ = null;
          valueBuilder_ = null;
        }

        return this;
      }
      /**
       * <pre>
       *The value.
       *Required.
       * </pre>
       *
       * <code>.google.protobuf.Value value = 2;</code>
       */
      public com.google.protobuf.Value.Builder getValueBuilder() {
        
        onChanged();
        return getValueFieldBuilder().getBuilder();
      }
      /**
       * <pre>
       *The value.
       *Required.
       * </pre>
       *
       * <code>.google.protobuf.Value value = 2;</code>
       */
      public com.google.protobuf.ValueOrBuilder getValueOrBuilder() {
        if (valueBuilder_ != null) {
          return valueBuilder_.getMessageOrBuilder();
        } else {
          return value_ == null ?
              com.google.protobuf.Value.getDefaultInstance() : value_;
        }
      }
      /**
       * <pre>
       *The value.
       *Required.
       * </pre>
       *
       * <code>.google.protobuf.Value value = 2;</code>
       */
      private com.google.protobuf.SingleFieldBuilderV3<
          com.google.protobuf.Value, com.google.protobuf.Value.Builder, com.google.protobuf.ValueOrBuilder> 
          getValueFieldBuilder() {
        if (valueBuilder_ == null) {
          valueBuilder_ = new com.google.protobuf.SingleFieldBuilderV3<
              com.google.protobuf.Value, com.google.protobuf.Value.Builder, com.google.protobuf.ValueOrBuilder>(
                  getValue(),
                  getParentForChildren(),
                  isClean());
          value_ = null;
        }
        return valueBuilder_;
      }
      @java.lang.Override
      public final Builder setUnknownFields(
          final com.google.protobuf.UnknownFieldSet unknownFields) {
        return super.setUnknownFields(unknownFields);
      }

      @java.lang.Override
      public final Builder mergeUnknownFields(
          final com.google.protobuf.UnknownFieldSet unknownFields) {
        return super.mergeUnknownFields(unknownFields);
      }


      // @@protoc_insertion_point(builder_scope:factset.protobuf.stach.v3.MetadataItem)
    }

    // @@protoc_insertion_point(class_scope:factset.protobuf.stach.v3.MetadataItem)
    private static final com.factset.protobuf.stach.v3.MetadataItemProto.MetadataItem DEFAULT_INSTANCE;
    static {
      DEFAULT_INSTANCE = new com.factset.protobuf.stach.v3.MetadataItemProto.MetadataItem();
    }

    public static com.factset.protobuf.stach.v3.MetadataItemProto.MetadataItem getDefaultInstance() {
      return DEFAULT_INSTANCE;
    }

    private static final com.google.protobuf.Parser<MetadataItem>
        PARSER = new com.google.protobuf.AbstractParser<MetadataItem>() {
      @java.lang.Override
      public MetadataItem parsePartialFrom(
          com.google.protobuf.CodedInputStream input,
          com.google.protobuf.ExtensionRegistryLite extensionRegistry)
          throws com.google.protobuf.InvalidProtocolBufferException {
        return new MetadataItem(input, extensionRegistry);
      }
    };

    public static com.google.protobuf.Parser<MetadataItem> parser() {
      return PARSER;
    }

    @java.lang.Override
    public com.google.protobuf.Parser<MetadataItem> getParserForType() {
      return PARSER;
    }

    @java.lang.Override
    public com.factset.protobuf.stach.v3.MetadataItemProto.MetadataItem getDefaultInstanceForType() {
      return DEFAULT_INSTANCE;
    }

  }

  private static final com.google.protobuf.Descriptors.Descriptor
    internal_static_factset_protobuf_stach_v3_MetadataItem_descriptor;
  private static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_factset_protobuf_stach_v3_MetadataItem_fieldAccessorTable;

  public static com.google.protobuf.Descriptors.FileDescriptor
      getDescriptor() {
    return descriptor;
  }
  private static  com.google.protobuf.Descriptors.FileDescriptor
      descriptor;
  static {
    java.lang.String[] descriptorData = {
      "\n(fds/protobuf/stach/v3/MetadataItem.pro" +
      "to\022\031factset.protobuf.stach.v3\032\034google/pr" +
      "otobuf/struct.proto\"N\n\014MetadataItem\022\027\n\017c" +
      "ontextual_type\030\001 \001(\t\022%\n\005value\030\002 \001(\0132\026.go" +
      "ogle.protobuf.ValueB\214\001\n\035com.factset.prot" +
      "obuf.stach.v3B\021MetadataItemProtoZ<github" +
      ".com/factset/stachschema-sdks/go/fds/pro" +
      "tobuf/stach/v3\252\002\031FactSet.Protobuf.Stach." +
      "V3b\006proto3"
    };
    descriptor = com.google.protobuf.Descriptors.FileDescriptor
      .internalBuildGeneratedFileFrom(descriptorData,
        new com.google.protobuf.Descriptors.FileDescriptor[] {
          com.google.protobuf.StructProto.getDescriptor(),
        });
    internal_static_factset_protobuf_stach_v3_MetadataItem_descriptor =
      getDescriptor().getMessageTypes().get(0);
    internal_static_factset_protobuf_stach_v3_MetadataItem_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_factset_protobuf_stach_v3_MetadataItem_descriptor,
        new java.lang.String[] { "ContextualType", "Value", });
    com.google.protobuf.StructProto.getDescriptor();
  }

  // @@protoc_insertion_point(outer_class_scope)
}

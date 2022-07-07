// <auto-generated>
//     Generated by the protocol buffer compiler.  DO NOT EDIT!
//     source: fds/protobuf/stach/v3/Views.proto
// </auto-generated>
#pragma warning disable 1591, 0612, 3021
#region Designer generated code

using pb = global::Google.Protobuf;
using pbc = global::Google.Protobuf.Collections;
using pbr = global::Google.Protobuf.Reflection;
using scg = global::System.Collections.Generic;
namespace FactSet.Protobuf.Stach.V3 {

  /// <summary>Holder for reflection information generated from fds/protobuf/stach/v3/Views.proto</summary>
  public static partial class ViewsReflection {

    #region Descriptor
    /// <summary>File descriptor for fds/protobuf/stach/v3/Views.proto</summary>
    public static pbr::FileDescriptor Descriptor {
      get { return descriptor; }
    }
    private static pbr::FileDescriptor descriptor;

    static ViewsReflection() {
      byte[] descriptorData = global::System.Convert.FromBase64String(
          string.Concat(
            "CiFmZHMvcHJvdG9idWYvc3RhY2gvdjMvVmlld3MucHJvdG8SGWZhY3RzZXQu",
            "cHJvdG9idWYuc3RhY2gudjMaJWZkcy9wcm90b2J1Zi9zdGFjaC92My9UYWJs",
            "ZVZpZXcucHJvdG8iqAEKBVZpZXdzEjQKBXZpZXdzGAEgAygLMiUuZmFjdHNl",
            "dC5wcm90b2J1Zi5zdGFjaC52My5WaWV3cy5WaWV3GmkKBFZpZXcSDAoEbmFt",
            "ZRgBIAEoCRIUCgxkaXNwbGF5X25hbWUYAiABKAkSNQoFdGFibGUYAyABKAsy",
            "JC5mYWN0c2V0LnByb3RvYnVmLnN0YWNoLnYzLlRhYmxlVmlld0gAQgYKBHR5",
            "cGVChQEKHWNvbS5mYWN0c2V0LnByb3RvYnVmLnN0YWNoLnYzQgpWaWV3c1By",
            "b3RvWjxnaXRodWIuY29tL2ZhY3RzZXQvc3RhY2hzY2hlbWEtc2Rrcy9nby9m",
            "ZHMvcHJvdG9idWYvc3RhY2gvdjOqAhlGYWN0U2V0LlByb3RvYnVmLlN0YWNo",
            "LlYzYgZwcm90bzM="));
      descriptor = pbr::FileDescriptor.FromGeneratedCode(descriptorData,
          new pbr::FileDescriptor[] { global::FactSet.Protobuf.Stach.V3.TableViewReflection.Descriptor, },
          new pbr::GeneratedClrTypeInfo(null, null, new pbr::GeneratedClrTypeInfo[] {
            new pbr::GeneratedClrTypeInfo(typeof(global::FactSet.Protobuf.Stach.V3.Views), global::FactSet.Protobuf.Stach.V3.Views.Parser, new[]{ "Views_" }, null, null, null, new pbr::GeneratedClrTypeInfo[] { new pbr::GeneratedClrTypeInfo(typeof(global::FactSet.Protobuf.Stach.V3.Views.Types.View), global::FactSet.Protobuf.Stach.V3.Views.Types.View.Parser, new[]{ "Name", "DisplayName", "Table" }, new[]{ "Type" }, null, null, null)})
          }));
    }
    #endregion

  }
  #region Messages
  /// <summary>
  ///
  ///A set of a metadata specifying one or more views for rendering a table.
  /// </summary>
  public sealed partial class Views : pb::IMessage<Views>
  #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
      , pb::IBufferMessage
  #endif
  {
    private static readonly pb::MessageParser<Views> _parser = new pb::MessageParser<Views>(() => new Views());
    private pb::UnknownFieldSet _unknownFields;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public static pb::MessageParser<Views> Parser { get { return _parser; } }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public static pbr::MessageDescriptor Descriptor {
      get { return global::FactSet.Protobuf.Stach.V3.ViewsReflection.Descriptor.MessageTypes[0]; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    pbr::MessageDescriptor pb::IMessage.Descriptor {
      get { return Descriptor; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public Views() {
      OnConstruction();
    }

    partial void OnConstruction();

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public Views(Views other) : this() {
      views_ = other.views_.Clone();
      _unknownFields = pb::UnknownFieldSet.Clone(other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public Views Clone() {
      return new Views(this);
    }

    /// <summary>Field number for the "views" field.</summary>
    public const int Views_FieldNumber = 1;
    private static readonly pb::FieldCodec<global::FactSet.Protobuf.Stach.V3.Views.Types.View> _repeated_views_codec
        = pb::FieldCodec.ForMessage(10, global::FactSet.Protobuf.Stach.V3.Views.Types.View.Parser);
    private readonly pbc::RepeatedField<global::FactSet.Protobuf.Stach.V3.Views.Types.View> views_ = new pbc::RepeatedField<global::FactSet.Protobuf.Stach.V3.Views.Types.View>();
    /// <summary>
    ///
    ///The views.
    ///The first view is considered the default view when rendering the table.
    ///Required.
    /// </summary>
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public pbc::RepeatedField<global::FactSet.Protobuf.Stach.V3.Views.Types.View> Views_ {
      get { return views_; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public override bool Equals(object other) {
      return Equals(other as Views);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public bool Equals(Views other) {
      if (ReferenceEquals(other, null)) {
        return false;
      }
      if (ReferenceEquals(other, this)) {
        return true;
      }
      if(!views_.Equals(other.views_)) return false;
      return Equals(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public override int GetHashCode() {
      int hash = 1;
      hash ^= views_.GetHashCode();
      if (_unknownFields != null) {
        hash ^= _unknownFields.GetHashCode();
      }
      return hash;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public override string ToString() {
      return pb::JsonFormatter.ToDiagnosticString(this);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public void WriteTo(pb::CodedOutputStream output) {
    #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
      output.WriteRawMessage(this);
    #else
      views_.WriteTo(output, _repeated_views_codec);
      if (_unknownFields != null) {
        _unknownFields.WriteTo(output);
      }
    #endif
    }

    #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    void pb::IBufferMessage.InternalWriteTo(ref pb::WriteContext output) {
      views_.WriteTo(ref output, _repeated_views_codec);
      if (_unknownFields != null) {
        _unknownFields.WriteTo(ref output);
      }
    }
    #endif

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public int CalculateSize() {
      int size = 0;
      size += views_.CalculateSize(_repeated_views_codec);
      if (_unknownFields != null) {
        size += _unknownFields.CalculateSize();
      }
      return size;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public void MergeFrom(Views other) {
      if (other == null) {
        return;
      }
      views_.Add(other.views_);
      _unknownFields = pb::UnknownFieldSet.MergeFrom(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public void MergeFrom(pb::CodedInputStream input) {
    #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
      input.ReadRawMessage(this);
    #else
      uint tag;
      while ((tag = input.ReadTag()) != 0) {
        switch(tag) {
          default:
            _unknownFields = pb::UnknownFieldSet.MergeFieldFrom(_unknownFields, input);
            break;
          case 10: {
            views_.AddEntriesFrom(input, _repeated_views_codec);
            break;
          }
        }
      }
    #endif
    }

    #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    void pb::IBufferMessage.InternalMergeFrom(ref pb::ParseContext input) {
      uint tag;
      while ((tag = input.ReadTag()) != 0) {
        switch(tag) {
          default:
            _unknownFields = pb::UnknownFieldSet.MergeFieldFrom(_unknownFields, ref input);
            break;
          case 10: {
            views_.AddEntriesFrom(ref input, _repeated_views_codec);
            break;
          }
        }
      }
    }
    #endif

    #region Nested types
    /// <summary>Container for nested types declared in the Views message type.</summary>
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
    public static partial class Types {
      /// <summary>
      ///
      ///A view for rendering a table.
      /// </summary>
      public sealed partial class View : pb::IMessage<View>
      #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
          , pb::IBufferMessage
      #endif
      {
        private static readonly pb::MessageParser<View> _parser = new pb::MessageParser<View>(() => new View());
        private pb::UnknownFieldSet _unknownFields;
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
        [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
        public static pb::MessageParser<View> Parser { get { return _parser; } }

        [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
        [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
        public static pbr::MessageDescriptor Descriptor {
          get { return global::FactSet.Protobuf.Stach.V3.Views.Descriptor.NestedTypes[0]; }
        }

        [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
        [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
        pbr::MessageDescriptor pb::IMessage.Descriptor {
          get { return Descriptor; }
        }

        [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
        [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
        public View() {
          OnConstruction();
        }

        partial void OnConstruction();

        [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
        [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
        public View(View other) : this() {
          name_ = other.name_;
          displayName_ = other.displayName_;
          switch (other.TypeCase) {
            case TypeOneofCase.Table:
              Table = other.Table.Clone();
              break;
          }

          _unknownFields = pb::UnknownFieldSet.Clone(other._unknownFields);
        }

        [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
        [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
        public View Clone() {
          return new View(this);
        }

        /// <summary>Field number for the "name" field.</summary>
        public const int NameFieldNumber = 1;
        private string name_ = "";
        /// <summary>
        ///
        ///The name of the view.
        ///Required.
        /// </summary>
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
        [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
        public string Name {
          get { return name_; }
          set {
            name_ = pb::ProtoPreconditions.CheckNotNull(value, "value");
          }
        }

        /// <summary>Field number for the "display_name" field.</summary>
        public const int DisplayNameFieldNumber = 2;
        private string displayName_ = "";
        /// <summary>
        ///
        ///The display name that describes the type of view.
        ///This is used when presenting the user with a list of views that can be rendered. e.g. 'Table', 'Bubble Chart', etc.
        ///Optional.
        /// </summary>
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
        [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
        public string DisplayName {
          get { return displayName_; }
          set {
            displayName_ = pb::ProtoPreconditions.CheckNotNull(value, "value");
          }
        }

        /// <summary>Field number for the "table" field.</summary>
        public const int TableFieldNumber = 3;
        /// <summary>
        ///
        ///The instructions to render tabular data into a rendered table.
        /// </summary>
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
        [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
        public global::FactSet.Protobuf.Stach.V3.TableView Table {
          get { return typeCase_ == TypeOneofCase.Table ? (global::FactSet.Protobuf.Stach.V3.TableView) type_ : null; }
          set {
            type_ = value;
            typeCase_ = value == null ? TypeOneofCase.None : TypeOneofCase.Table;
          }
        }

        private object type_;
        /// <summary>Enum of possible cases for the "type" oneof.</summary>
        public enum TypeOneofCase {
          None = 0,
          Table = 3,
        }
        private TypeOneofCase typeCase_ = TypeOneofCase.None;
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
        [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
        public TypeOneofCase TypeCase {
          get { return typeCase_; }
        }

        [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
        [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
        public void ClearType() {
          typeCase_ = TypeOneofCase.None;
          type_ = null;
        }

        [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
        [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
        public override bool Equals(object other) {
          return Equals(other as View);
        }

        [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
        [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
        public bool Equals(View other) {
          if (ReferenceEquals(other, null)) {
            return false;
          }
          if (ReferenceEquals(other, this)) {
            return true;
          }
          if (Name != other.Name) return false;
          if (DisplayName != other.DisplayName) return false;
          if (!object.Equals(Table, other.Table)) return false;
          if (TypeCase != other.TypeCase) return false;
          return Equals(_unknownFields, other._unknownFields);
        }

        [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
        [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
        public override int GetHashCode() {
          int hash = 1;
          if (Name.Length != 0) hash ^= Name.GetHashCode();
          if (DisplayName.Length != 0) hash ^= DisplayName.GetHashCode();
          if (typeCase_ == TypeOneofCase.Table) hash ^= Table.GetHashCode();
          hash ^= (int) typeCase_;
          if (_unknownFields != null) {
            hash ^= _unknownFields.GetHashCode();
          }
          return hash;
        }

        [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
        [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
        public override string ToString() {
          return pb::JsonFormatter.ToDiagnosticString(this);
        }

        [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
        [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
        public void WriteTo(pb::CodedOutputStream output) {
        #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
          output.WriteRawMessage(this);
        #else
          if (Name.Length != 0) {
            output.WriteRawTag(10);
            output.WriteString(Name);
          }
          if (DisplayName.Length != 0) {
            output.WriteRawTag(18);
            output.WriteString(DisplayName);
          }
          if (typeCase_ == TypeOneofCase.Table) {
            output.WriteRawTag(26);
            output.WriteMessage(Table);
          }
          if (_unknownFields != null) {
            _unknownFields.WriteTo(output);
          }
        #endif
        }

        #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
        [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
        void pb::IBufferMessage.InternalWriteTo(ref pb::WriteContext output) {
          if (Name.Length != 0) {
            output.WriteRawTag(10);
            output.WriteString(Name);
          }
          if (DisplayName.Length != 0) {
            output.WriteRawTag(18);
            output.WriteString(DisplayName);
          }
          if (typeCase_ == TypeOneofCase.Table) {
            output.WriteRawTag(26);
            output.WriteMessage(Table);
          }
          if (_unknownFields != null) {
            _unknownFields.WriteTo(ref output);
          }
        }
        #endif

        [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
        [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
        public int CalculateSize() {
          int size = 0;
          if (Name.Length != 0) {
            size += 1 + pb::CodedOutputStream.ComputeStringSize(Name);
          }
          if (DisplayName.Length != 0) {
            size += 1 + pb::CodedOutputStream.ComputeStringSize(DisplayName);
          }
          if (typeCase_ == TypeOneofCase.Table) {
            size += 1 + pb::CodedOutputStream.ComputeMessageSize(Table);
          }
          if (_unknownFields != null) {
            size += _unknownFields.CalculateSize();
          }
          return size;
        }

        [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
        [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
        public void MergeFrom(View other) {
          if (other == null) {
            return;
          }
          if (other.Name.Length != 0) {
            Name = other.Name;
          }
          if (other.DisplayName.Length != 0) {
            DisplayName = other.DisplayName;
          }
          switch (other.TypeCase) {
            case TypeOneofCase.Table:
              if (Table == null) {
                Table = new global::FactSet.Protobuf.Stach.V3.TableView();
              }
              Table.MergeFrom(other.Table);
              break;
          }

          _unknownFields = pb::UnknownFieldSet.MergeFrom(_unknownFields, other._unknownFields);
        }

        [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
        [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
        public void MergeFrom(pb::CodedInputStream input) {
        #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
          input.ReadRawMessage(this);
        #else
          uint tag;
          while ((tag = input.ReadTag()) != 0) {
            switch(tag) {
              default:
                _unknownFields = pb::UnknownFieldSet.MergeFieldFrom(_unknownFields, input);
                break;
              case 10: {
                Name = input.ReadString();
                break;
              }
              case 18: {
                DisplayName = input.ReadString();
                break;
              }
              case 26: {
                global::FactSet.Protobuf.Stach.V3.TableView subBuilder = new global::FactSet.Protobuf.Stach.V3.TableView();
                if (typeCase_ == TypeOneofCase.Table) {
                  subBuilder.MergeFrom(Table);
                }
                input.ReadMessage(subBuilder);
                Table = subBuilder;
                break;
              }
            }
          }
        #endif
        }

        #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
        [global::System.CodeDom.Compiler.GeneratedCode("protoc", null)]
        void pb::IBufferMessage.InternalMergeFrom(ref pb::ParseContext input) {
          uint tag;
          while ((tag = input.ReadTag()) != 0) {
            switch(tag) {
              default:
                _unknownFields = pb::UnknownFieldSet.MergeFieldFrom(_unknownFields, ref input);
                break;
              case 10: {
                Name = input.ReadString();
                break;
              }
              case 18: {
                DisplayName = input.ReadString();
                break;
              }
              case 26: {
                global::FactSet.Protobuf.Stach.V3.TableView subBuilder = new global::FactSet.Protobuf.Stach.V3.TableView();
                if (typeCase_ == TypeOneofCase.Table) {
                  subBuilder.MergeFrom(Table);
                }
                input.ReadMessage(subBuilder);
                Table = subBuilder;
                break;
              }
            }
          }
        }
        #endif

      }

    }
    #endregion

  }

  #endregion

}

#endregion Designer generated code

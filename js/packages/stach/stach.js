/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots.stach || ($protobuf.roots.stach = {});

$root.factset = (function() {

    /**
     * Namespace factset.
     * @exports factset
     * @namespace
     */
    var factset = {};

    factset.protobuf = (function() {

        /**
         * Namespace protobuf.
         * @memberof factset
         * @namespace
         */
        var protobuf = {};

        protobuf.stach = (function() {

            /**
             * Namespace stach.
             * @memberof factset.protobuf
             * @namespace
             */
            var stach = {};

            stach.v3 = (function() {

                /**
                 * Namespace v3.
                 * @memberof factset.protobuf.stach
                 * @namespace
                 */
                var v3 = {};

                v3.Column = (function() {

                    /**
                     * Properties of a Column.
                     * @memberof factset.protobuf.stach.v3
                     * @interface IColumn
                     * @property {string|null} [contextualType] Column contextualType
                     * @property {Object.<string,factset.protobuf.stach.v3.IMetadataItem>|null} [customMetadata] Column customMetadata
                     */

                    /**
                     * Constructs a new Column.
                     * @memberof factset.protobuf.stach.v3
                     * @classdesc Represents a Column.
                     * @implements IColumn
                     * @constructor
                     * @param {factset.protobuf.stach.v3.IColumn=} [properties] Properties to set
                     */
                    function Column(properties) {
                        this.customMetadata = {};
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Column contextualType.
                     * @member {string} contextualType
                     * @memberof factset.protobuf.stach.v3.Column
                     * @instance
                     */
                    Column.prototype.contextualType = "";

                    /**
                     * Column customMetadata.
                     * @member {Object.<string,factset.protobuf.stach.v3.IMetadataItem>} customMetadata
                     * @memberof factset.protobuf.stach.v3.Column
                     * @instance
                     */
                    Column.prototype.customMetadata = $util.emptyObject;

                    /**
                     * Creates a new Column instance using the specified properties.
                     * @function create
                     * @memberof factset.protobuf.stach.v3.Column
                     * @static
                     * @param {factset.protobuf.stach.v3.IColumn=} [properties] Properties to set
                     * @returns {factset.protobuf.stach.v3.Column} Column instance
                     */
                    Column.create = function create(properties) {
                        return new Column(properties);
                    };

                    /**
                     * Encodes the specified Column message. Does not implicitly {@link factset.protobuf.stach.v3.Column.verify|verify} messages.
                     * @function encode
                     * @memberof factset.protobuf.stach.v3.Column
                     * @static
                     * @param {factset.protobuf.stach.v3.IColumn} message Column message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Column.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.contextualType != null && Object.hasOwnProperty.call(message, "contextualType"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.contextualType);
                        if (message.customMetadata != null && Object.hasOwnProperty.call(message, "customMetadata"))
                            for (var keys = Object.keys(message.customMetadata), i = 0; i < keys.length; ++i) {
                                writer.uint32(/* id 100, wireType 2 =*/802).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                                $root.factset.protobuf.stach.v3.MetadataItem.encode(message.customMetadata[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                            }
                        return writer;
                    };

                    /**
                     * Encodes the specified Column message, length delimited. Does not implicitly {@link factset.protobuf.stach.v3.Column.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof factset.protobuf.stach.v3.Column
                     * @static
                     * @param {factset.protobuf.stach.v3.IColumn} message Column message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Column.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a Column message from the specified reader or buffer.
                     * @function decode
                     * @memberof factset.protobuf.stach.v3.Column
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {factset.protobuf.stach.v3.Column} Column
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Column.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.factset.protobuf.stach.v3.Column(), key, value;
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.contextualType = reader.string();
                                break;
                            case 100:
                                if (message.customMetadata === $util.emptyObject)
                                    message.customMetadata = {};
                                var end2 = reader.uint32() + reader.pos;
                                key = "";
                                value = null;
                                while (reader.pos < end2) {
                                    var tag2 = reader.uint32();
                                    switch (tag2 >>> 3) {
                                    case 1:
                                        key = reader.string();
                                        break;
                                    case 2:
                                        value = $root.factset.protobuf.stach.v3.MetadataItem.decode(reader, reader.uint32());
                                        break;
                                    default:
                                        reader.skipType(tag2 & 7);
                                        break;
                                    }
                                }
                                message.customMetadata[key] = value;
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a Column message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof factset.protobuf.stach.v3.Column
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {factset.protobuf.stach.v3.Column} Column
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Column.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a Column message.
                     * @function verify
                     * @memberof factset.protobuf.stach.v3.Column
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Column.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.contextualType != null && message.hasOwnProperty("contextualType"))
                            if (!$util.isString(message.contextualType))
                                return "contextualType: string expected";
                        if (message.customMetadata != null && message.hasOwnProperty("customMetadata")) {
                            if (!$util.isObject(message.customMetadata))
                                return "customMetadata: object expected";
                            var key = Object.keys(message.customMetadata);
                            for (var i = 0; i < key.length; ++i) {
                                var error = $root.factset.protobuf.stach.v3.MetadataItem.verify(message.customMetadata[key[i]]);
                                if (error)
                                    return "customMetadata." + error;
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates a Column message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof factset.protobuf.stach.v3.Column
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {factset.protobuf.stach.v3.Column} Column
                     */
                    Column.fromObject = function fromObject(object) {
                        if (object instanceof $root.factset.protobuf.stach.v3.Column)
                            return object;
                        var message = new $root.factset.protobuf.stach.v3.Column();
                        if (object.contextualType != null)
                            message.contextualType = String(object.contextualType);
                        if (object.customMetadata) {
                            if (typeof object.customMetadata !== "object")
                                throw TypeError(".factset.protobuf.stach.v3.Column.customMetadata: object expected");
                            message.customMetadata = {};
                            for (var keys = Object.keys(object.customMetadata), i = 0; i < keys.length; ++i) {
                                if (typeof object.customMetadata[keys[i]] !== "object")
                                    throw TypeError(".factset.protobuf.stach.v3.Column.customMetadata: object expected");
                                message.customMetadata[keys[i]] = $root.factset.protobuf.stach.v3.MetadataItem.fromObject(object.customMetadata[keys[i]]);
                            }
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a Column message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof factset.protobuf.stach.v3.Column
                     * @static
                     * @param {factset.protobuf.stach.v3.Column} message Column
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Column.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.objects || options.defaults)
                            object.customMetadata = {};
                        if (options.defaults)
                            object.contextualType = "";
                        if (message.contextualType != null && message.hasOwnProperty("contextualType"))
                            object.contextualType = message.contextualType;
                        var keys2;
                        if (message.customMetadata && (keys2 = Object.keys(message.customMetadata)).length) {
                            object.customMetadata = {};
                            for (var j = 0; j < keys2.length; ++j)
                                object.customMetadata[keys2[j]] = $root.factset.protobuf.stach.v3.MetadataItem.toObject(message.customMetadata[keys2[j]], options);
                        }
                        return object;
                    };

                    /**
                     * Converts this Column to JSON.
                     * @function toJSON
                     * @memberof factset.protobuf.stach.v3.Column
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Column.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return Column;
                })();

                v3.MetadataItem = (function() {

                    /**
                     * Properties of a MetadataItem.
                     * @memberof factset.protobuf.stach.v3
                     * @interface IMetadataItem
                     * @property {string|null} [contextualType] MetadataItem contextualType
                     * @property {google.protobuf.IValue|null} [value] MetadataItem value
                     */

                    /**
                     * Constructs a new MetadataItem.
                     * @memberof factset.protobuf.stach.v3
                     * @classdesc Represents a MetadataItem.
                     * @implements IMetadataItem
                     * @constructor
                     * @param {factset.protobuf.stach.v3.IMetadataItem=} [properties] Properties to set
                     */
                    function MetadataItem(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * MetadataItem contextualType.
                     * @member {string} contextualType
                     * @memberof factset.protobuf.stach.v3.MetadataItem
                     * @instance
                     */
                    MetadataItem.prototype.contextualType = "";

                    /**
                     * MetadataItem value.
                     * @member {google.protobuf.IValue|null|undefined} value
                     * @memberof factset.protobuf.stach.v3.MetadataItem
                     * @instance
                     */
                    MetadataItem.prototype.value = null;

                    /**
                     * Creates a new MetadataItem instance using the specified properties.
                     * @function create
                     * @memberof factset.protobuf.stach.v3.MetadataItem
                     * @static
                     * @param {factset.protobuf.stach.v3.IMetadataItem=} [properties] Properties to set
                     * @returns {factset.protobuf.stach.v3.MetadataItem} MetadataItem instance
                     */
                    MetadataItem.create = function create(properties) {
                        return new MetadataItem(properties);
                    };

                    /**
                     * Encodes the specified MetadataItem message. Does not implicitly {@link factset.protobuf.stach.v3.MetadataItem.verify|verify} messages.
                     * @function encode
                     * @memberof factset.protobuf.stach.v3.MetadataItem
                     * @static
                     * @param {factset.protobuf.stach.v3.IMetadataItem} message MetadataItem message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    MetadataItem.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.contextualType != null && Object.hasOwnProperty.call(message, "contextualType"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.contextualType);
                        if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                            $root.google.protobuf.Value.encode(message.value, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified MetadataItem message, length delimited. Does not implicitly {@link factset.protobuf.stach.v3.MetadataItem.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof factset.protobuf.stach.v3.MetadataItem
                     * @static
                     * @param {factset.protobuf.stach.v3.IMetadataItem} message MetadataItem message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    MetadataItem.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a MetadataItem message from the specified reader or buffer.
                     * @function decode
                     * @memberof factset.protobuf.stach.v3.MetadataItem
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {factset.protobuf.stach.v3.MetadataItem} MetadataItem
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    MetadataItem.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.factset.protobuf.stach.v3.MetadataItem();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.contextualType = reader.string();
                                break;
                            case 2:
                                message.value = $root.google.protobuf.Value.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a MetadataItem message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof factset.protobuf.stach.v3.MetadataItem
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {factset.protobuf.stach.v3.MetadataItem} MetadataItem
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    MetadataItem.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a MetadataItem message.
                     * @function verify
                     * @memberof factset.protobuf.stach.v3.MetadataItem
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    MetadataItem.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.contextualType != null && message.hasOwnProperty("contextualType"))
                            if (!$util.isString(message.contextualType))
                                return "contextualType: string expected";
                        if (message.value != null && message.hasOwnProperty("value")) {
                            var error = $root.google.protobuf.Value.verify(message.value);
                            if (error)
                                return "value." + error;
                        }
                        return null;
                    };

                    /**
                     * Creates a MetadataItem message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof factset.protobuf.stach.v3.MetadataItem
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {factset.protobuf.stach.v3.MetadataItem} MetadataItem
                     */
                    MetadataItem.fromObject = function fromObject(object) {
                        if (object instanceof $root.factset.protobuf.stach.v3.MetadataItem)
                            return object;
                        var message = new $root.factset.protobuf.stach.v3.MetadataItem();
                        if (object.contextualType != null)
                            message.contextualType = String(object.contextualType);
                        if (object.value != null) {
                            message.value = $root.google.protobuf.Value.fromObject(object.value);
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a MetadataItem message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof factset.protobuf.stach.v3.MetadataItem
                     * @static
                     * @param {factset.protobuf.stach.v3.MetadataItem} message MetadataItem
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    MetadataItem.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.contextualType = "";
                            object.value = null;
                        }
                        if (message.contextualType != null && message.hasOwnProperty("contextualType"))
                            object.contextualType = message.contextualType;
                        if (message.value != null && message.hasOwnProperty("value"))
                            object.value = $root.google.protobuf.Value.toObject(message.value, options);
                        return object;
                    };

                    /**
                     * Converts this MetadataItem to JSON.
                     * @function toJSON
                     * @memberof factset.protobuf.stach.v3.MetadataItem
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    MetadataItem.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return MetadataItem;
                })();

                v3.RowOrganizedTable = (function() {

                    /**
                     * Properties of a RowOrganizedTable.
                     * @memberof factset.protobuf.stach.v3
                     * @interface IRowOrganizedTable
                     * @property {string|null} [version] RowOrganizedTable version
                     * @property {string|null} [name] RowOrganizedTable name
                     * @property {Array.<factset.protobuf.stach.v3.RowOrganizedTable.IColumn>|null} [columns] RowOrganizedTable columns
                     * @property {factset.protobuf.stach.v3.ITable|null} [table] RowOrganizedTable table
                     * @property {factset.protobuf.stach.v3.IRowOrganizedTable|null} [multiLevelHeadersTable] RowOrganizedTable multiLevelHeadersTable
                     * @property {Array.<factset.protobuf.stach.v3.Views.IView>|null} [views] RowOrganizedTable views
                     * @property {Array.<factset.protobuf.stach.v3.RowOrganizedTable.IHeaderRow>|null} [headerRows] RowOrganizedTable headerRows
                     * @property {Array.<google.protobuf.IStruct>|null} [rows] RowOrganizedTable rows
                     */

                    /**
                     * Constructs a new RowOrganizedTable.
                     * @memberof factset.protobuf.stach.v3
                     * @classdesc Represents a RowOrganizedTable.
                     * @implements IRowOrganizedTable
                     * @constructor
                     * @param {factset.protobuf.stach.v3.IRowOrganizedTable=} [properties] Properties to set
                     */
                    function RowOrganizedTable(properties) {
                        this.columns = [];
                        this.views = [];
                        this.headerRows = [];
                        this.rows = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * RowOrganizedTable version.
                     * @member {string} version
                     * @memberof factset.protobuf.stach.v3.RowOrganizedTable
                     * @instance
                     */
                    RowOrganizedTable.prototype.version = "";

                    /**
                     * RowOrganizedTable name.
                     * @member {string} name
                     * @memberof factset.protobuf.stach.v3.RowOrganizedTable
                     * @instance
                     */
                    RowOrganizedTable.prototype.name = "";

                    /**
                     * RowOrganizedTable columns.
                     * @member {Array.<factset.protobuf.stach.v3.RowOrganizedTable.IColumn>} columns
                     * @memberof factset.protobuf.stach.v3.RowOrganizedTable
                     * @instance
                     */
                    RowOrganizedTable.prototype.columns = $util.emptyArray;

                    /**
                     * RowOrganizedTable table.
                     * @member {factset.protobuf.stach.v3.ITable|null|undefined} table
                     * @memberof factset.protobuf.stach.v3.RowOrganizedTable
                     * @instance
                     */
                    RowOrganizedTable.prototype.table = null;

                    /**
                     * RowOrganizedTable multiLevelHeadersTable.
                     * @member {factset.protobuf.stach.v3.IRowOrganizedTable|null|undefined} multiLevelHeadersTable
                     * @memberof factset.protobuf.stach.v3.RowOrganizedTable
                     * @instance
                     */
                    RowOrganizedTable.prototype.multiLevelHeadersTable = null;

                    /**
                     * RowOrganizedTable views.
                     * @member {Array.<factset.protobuf.stach.v3.Views.IView>} views
                     * @memberof factset.protobuf.stach.v3.RowOrganizedTable
                     * @instance
                     */
                    RowOrganizedTable.prototype.views = $util.emptyArray;

                    /**
                     * RowOrganizedTable headerRows.
                     * @member {Array.<factset.protobuf.stach.v3.RowOrganizedTable.IHeaderRow>} headerRows
                     * @memberof factset.protobuf.stach.v3.RowOrganizedTable
                     * @instance
                     */
                    RowOrganizedTable.prototype.headerRows = $util.emptyArray;

                    /**
                     * RowOrganizedTable rows.
                     * @member {Array.<google.protobuf.IStruct>} rows
                     * @memberof factset.protobuf.stach.v3.RowOrganizedTable
                     * @instance
                     */
                    RowOrganizedTable.prototype.rows = $util.emptyArray;

                    /**
                     * Creates a new RowOrganizedTable instance using the specified properties.
                     * @function create
                     * @memberof factset.protobuf.stach.v3.RowOrganizedTable
                     * @static
                     * @param {factset.protobuf.stach.v3.IRowOrganizedTable=} [properties] Properties to set
                     * @returns {factset.protobuf.stach.v3.RowOrganizedTable} RowOrganizedTable instance
                     */
                    RowOrganizedTable.create = function create(properties) {
                        return new RowOrganizedTable(properties);
                    };

                    /**
                     * Encodes the specified RowOrganizedTable message. Does not implicitly {@link factset.protobuf.stach.v3.RowOrganizedTable.verify|verify} messages.
                     * @function encode
                     * @memberof factset.protobuf.stach.v3.RowOrganizedTable
                     * @static
                     * @param {factset.protobuf.stach.v3.IRowOrganizedTable} message RowOrganizedTable message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    RowOrganizedTable.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.version != null && Object.hasOwnProperty.call(message, "version"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.version);
                        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
                        if (message.columns != null && message.columns.length)
                            for (var i = 0; i < message.columns.length; ++i)
                                $root.factset.protobuf.stach.v3.RowOrganizedTable.Column.encode(message.columns[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                        if (message.table != null && Object.hasOwnProperty.call(message, "table"))
                            $root.factset.protobuf.stach.v3.Table.encode(message.table, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                        if (message.multiLevelHeadersTable != null && Object.hasOwnProperty.call(message, "multiLevelHeadersTable"))
                            $root.factset.protobuf.stach.v3.RowOrganizedTable.encode(message.multiLevelHeadersTable, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                        if (message.views != null && message.views.length)
                            for (var i = 0; i < message.views.length; ++i)
                                $root.factset.protobuf.stach.v3.Views.View.encode(message.views[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                        if (message.headerRows != null && message.headerRows.length)
                            for (var i = 0; i < message.headerRows.length; ++i)
                                $root.factset.protobuf.stach.v3.RowOrganizedTable.HeaderRow.encode(message.headerRows[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                        if (message.rows != null && message.rows.length)
                            for (var i = 0; i < message.rows.length; ++i)
                                $root.google.protobuf.Struct.encode(message.rows[i], writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified RowOrganizedTable message, length delimited. Does not implicitly {@link factset.protobuf.stach.v3.RowOrganizedTable.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof factset.protobuf.stach.v3.RowOrganizedTable
                     * @static
                     * @param {factset.protobuf.stach.v3.IRowOrganizedTable} message RowOrganizedTable message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    RowOrganizedTable.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a RowOrganizedTable message from the specified reader or buffer.
                     * @function decode
                     * @memberof factset.protobuf.stach.v3.RowOrganizedTable
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {factset.protobuf.stach.v3.RowOrganizedTable} RowOrganizedTable
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    RowOrganizedTable.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.factset.protobuf.stach.v3.RowOrganizedTable();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.version = reader.string();
                                break;
                            case 2:
                                message.name = reader.string();
                                break;
                            case 3:
                                if (!(message.columns && message.columns.length))
                                    message.columns = [];
                                message.columns.push($root.factset.protobuf.stach.v3.RowOrganizedTable.Column.decode(reader, reader.uint32()));
                                break;
                            case 4:
                                message.table = $root.factset.protobuf.stach.v3.Table.decode(reader, reader.uint32());
                                break;
                            case 5:
                                message.multiLevelHeadersTable = $root.factset.protobuf.stach.v3.RowOrganizedTable.decode(reader, reader.uint32());
                                break;
                            case 6:
                                if (!(message.views && message.views.length))
                                    message.views = [];
                                message.views.push($root.factset.protobuf.stach.v3.Views.View.decode(reader, reader.uint32()));
                                break;
                            case 7:
                                if (!(message.headerRows && message.headerRows.length))
                                    message.headerRows = [];
                                message.headerRows.push($root.factset.protobuf.stach.v3.RowOrganizedTable.HeaderRow.decode(reader, reader.uint32()));
                                break;
                            case 8:
                                if (!(message.rows && message.rows.length))
                                    message.rows = [];
                                message.rows.push($root.google.protobuf.Struct.decode(reader, reader.uint32()));
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a RowOrganizedTable message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof factset.protobuf.stach.v3.RowOrganizedTable
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {factset.protobuf.stach.v3.RowOrganizedTable} RowOrganizedTable
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    RowOrganizedTable.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a RowOrganizedTable message.
                     * @function verify
                     * @memberof factset.protobuf.stach.v3.RowOrganizedTable
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    RowOrganizedTable.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.version != null && message.hasOwnProperty("version"))
                            if (!$util.isString(message.version))
                                return "version: string expected";
                        if (message.name != null && message.hasOwnProperty("name"))
                            if (!$util.isString(message.name))
                                return "name: string expected";
                        if (message.columns != null && message.hasOwnProperty("columns")) {
                            if (!Array.isArray(message.columns))
                                return "columns: array expected";
                            for (var i = 0; i < message.columns.length; ++i) {
                                var error = $root.factset.protobuf.stach.v3.RowOrganizedTable.Column.verify(message.columns[i]);
                                if (error)
                                    return "columns." + error;
                            }
                        }
                        if (message.table != null && message.hasOwnProperty("table")) {
                            var error = $root.factset.protobuf.stach.v3.Table.verify(message.table);
                            if (error)
                                return "table." + error;
                        }
                        if (message.multiLevelHeadersTable != null && message.hasOwnProperty("multiLevelHeadersTable")) {
                            var error = $root.factset.protobuf.stach.v3.RowOrganizedTable.verify(message.multiLevelHeadersTable);
                            if (error)
                                return "multiLevelHeadersTable." + error;
                        }
                        if (message.views != null && message.hasOwnProperty("views")) {
                            if (!Array.isArray(message.views))
                                return "views: array expected";
                            for (var i = 0; i < message.views.length; ++i) {
                                var error = $root.factset.protobuf.stach.v3.Views.View.verify(message.views[i]);
                                if (error)
                                    return "views." + error;
                            }
                        }
                        if (message.headerRows != null && message.hasOwnProperty("headerRows")) {
                            if (!Array.isArray(message.headerRows))
                                return "headerRows: array expected";
                            for (var i = 0; i < message.headerRows.length; ++i) {
                                var error = $root.factset.protobuf.stach.v3.RowOrganizedTable.HeaderRow.verify(message.headerRows[i]);
                                if (error)
                                    return "headerRows." + error;
                            }
                        }
                        if (message.rows != null && message.hasOwnProperty("rows")) {
                            if (!Array.isArray(message.rows))
                                return "rows: array expected";
                            for (var i = 0; i < message.rows.length; ++i) {
                                var error = $root.google.protobuf.Struct.verify(message.rows[i]);
                                if (error)
                                    return "rows." + error;
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates a RowOrganizedTable message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof factset.protobuf.stach.v3.RowOrganizedTable
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {factset.protobuf.stach.v3.RowOrganizedTable} RowOrganizedTable
                     */
                    RowOrganizedTable.fromObject = function fromObject(object) {
                        if (object instanceof $root.factset.protobuf.stach.v3.RowOrganizedTable)
                            return object;
                        var message = new $root.factset.protobuf.stach.v3.RowOrganizedTable();
                        if (object.version != null)
                            message.version = String(object.version);
                        if (object.name != null)
                            message.name = String(object.name);
                        if (object.columns) {
                            if (!Array.isArray(object.columns))
                                throw TypeError(".factset.protobuf.stach.v3.RowOrganizedTable.columns: array expected");
                            message.columns = [];
                            for (var i = 0; i < object.columns.length; ++i) {
                                if (typeof object.columns[i] !== "object")
                                    throw TypeError(".factset.protobuf.stach.v3.RowOrganizedTable.columns: object expected");
                                message.columns[i] = $root.factset.protobuf.stach.v3.RowOrganizedTable.Column.fromObject(object.columns[i]);
                            }
                        }
                        if (object.table != null) {
                            if (typeof object.table !== "object")
                                throw TypeError(".factset.protobuf.stach.v3.RowOrganizedTable.table: object expected");
                            message.table = $root.factset.protobuf.stach.v3.Table.fromObject(object.table);
                        }
                        if (object.multiLevelHeadersTable != null) {
                            if (typeof object.multiLevelHeadersTable !== "object")
                                throw TypeError(".factset.protobuf.stach.v3.RowOrganizedTable.multiLevelHeadersTable: object expected");
                            message.multiLevelHeadersTable = $root.factset.protobuf.stach.v3.RowOrganizedTable.fromObject(object.multiLevelHeadersTable);
                        }
                        if (object.views) {
                            if (!Array.isArray(object.views))
                                throw TypeError(".factset.protobuf.stach.v3.RowOrganizedTable.views: array expected");
                            message.views = [];
                            for (var i = 0; i < object.views.length; ++i) {
                                if (typeof object.views[i] !== "object")
                                    throw TypeError(".factset.protobuf.stach.v3.RowOrganizedTable.views: object expected");
                                message.views[i] = $root.factset.protobuf.stach.v3.Views.View.fromObject(object.views[i]);
                            }
                        }
                        if (object.headerRows) {
                            if (!Array.isArray(object.headerRows))
                                throw TypeError(".factset.protobuf.stach.v3.RowOrganizedTable.headerRows: array expected");
                            message.headerRows = [];
                            for (var i = 0; i < object.headerRows.length; ++i) {
                                if (typeof object.headerRows[i] !== "object")
                                    throw TypeError(".factset.protobuf.stach.v3.RowOrganizedTable.headerRows: object expected");
                                message.headerRows[i] = $root.factset.protobuf.stach.v3.RowOrganizedTable.HeaderRow.fromObject(object.headerRows[i]);
                            }
                        }
                        if (object.rows) {
                            if (!Array.isArray(object.rows))
                                throw TypeError(".factset.protobuf.stach.v3.RowOrganizedTable.rows: array expected");
                            message.rows = [];
                            for (var i = 0; i < object.rows.length; ++i) {
                                message.rows[i] = $root.google.protobuf.Struct.fromObject(object.rows[i]);
                            }
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a RowOrganizedTable message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof factset.protobuf.stach.v3.RowOrganizedTable
                     * @static
                     * @param {factset.protobuf.stach.v3.RowOrganizedTable} message RowOrganizedTable
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    RowOrganizedTable.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults) {
                            object.columns = [];
                            object.views = [];
                            object.headerRows = [];
                            object.rows = [];
                        }
                        if (options.defaults) {
                            object.version = "";
                            object.name = "";
                            object.table = null;
                            object.multiLevelHeadersTable = null;
                        }
                        if (message.version != null && message.hasOwnProperty("version"))
                            object.version = message.version;
                        if (message.name != null && message.hasOwnProperty("name"))
                            object.name = message.name;
                        if (message.columns && message.columns.length) {
                            object.columns = [];
                            for (var j = 0; j < message.columns.length; ++j)
                                object.columns[j] = $root.factset.protobuf.stach.v3.RowOrganizedTable.Column.toObject(message.columns[j], options);
                        }
                        if (message.table != null && message.hasOwnProperty("table"))
                            object.table = $root.factset.protobuf.stach.v3.Table.toObject(message.table, options);
                        if (message.multiLevelHeadersTable != null && message.hasOwnProperty("multiLevelHeadersTable"))
                            object.multiLevelHeadersTable = $root.factset.protobuf.stach.v3.RowOrganizedTable.toObject(message.multiLevelHeadersTable, options);
                        if (message.views && message.views.length) {
                            object.views = [];
                            for (var j = 0; j < message.views.length; ++j)
                                object.views[j] = $root.factset.protobuf.stach.v3.Views.View.toObject(message.views[j], options);
                        }
                        if (message.headerRows && message.headerRows.length) {
                            object.headerRows = [];
                            for (var j = 0; j < message.headerRows.length; ++j)
                                object.headerRows[j] = $root.factset.protobuf.stach.v3.RowOrganizedTable.HeaderRow.toObject(message.headerRows[j], options);
                        }
                        if (message.rows && message.rows.length) {
                            object.rows = [];
                            for (var j = 0; j < message.rows.length; ++j)
                                object.rows[j] = $root.google.protobuf.Struct.toObject(message.rows[j], options);
                        }
                        return object;
                    };

                    /**
                     * Converts this RowOrganizedTable to JSON.
                     * @function toJSON
                     * @memberof factset.protobuf.stach.v3.RowOrganizedTable
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    RowOrganizedTable.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    RowOrganizedTable.Column = (function() {

                        /**
                         * Properties of a Column.
                         * @memberof factset.protobuf.stach.v3.RowOrganizedTable
                         * @interface IColumn
                         * @property {string|null} [name] Column name
                         * @property {boolean|null} [forbidNulls] Column forbidNulls
                         * @property {string|null} [contextualType] Column contextualType
                         * @property {Object.<string,factset.protobuf.stach.v3.IMetadataItem>|null} [customMetadata] Column customMetadata
                         */

                        /**
                         * Constructs a new Column.
                         * @memberof factset.protobuf.stach.v3.RowOrganizedTable
                         * @classdesc Represents a Column.
                         * @implements IColumn
                         * @constructor
                         * @param {factset.protobuf.stach.v3.RowOrganizedTable.IColumn=} [properties] Properties to set
                         */
                        function Column(properties) {
                            this.customMetadata = {};
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * Column name.
                         * @member {string} name
                         * @memberof factset.protobuf.stach.v3.RowOrganizedTable.Column
                         * @instance
                         */
                        Column.prototype.name = "";

                        /**
                         * Column forbidNulls.
                         * @member {boolean} forbidNulls
                         * @memberof factset.protobuf.stach.v3.RowOrganizedTable.Column
                         * @instance
                         */
                        Column.prototype.forbidNulls = false;

                        /**
                         * Column contextualType.
                         * @member {string} contextualType
                         * @memberof factset.protobuf.stach.v3.RowOrganizedTable.Column
                         * @instance
                         */
                        Column.prototype.contextualType = "";

                        /**
                         * Column customMetadata.
                         * @member {Object.<string,factset.protobuf.stach.v3.IMetadataItem>} customMetadata
                         * @memberof factset.protobuf.stach.v3.RowOrganizedTable.Column
                         * @instance
                         */
                        Column.prototype.customMetadata = $util.emptyObject;

                        /**
                         * Creates a new Column instance using the specified properties.
                         * @function create
                         * @memberof factset.protobuf.stach.v3.RowOrganizedTable.Column
                         * @static
                         * @param {factset.protobuf.stach.v3.RowOrganizedTable.IColumn=} [properties] Properties to set
                         * @returns {factset.protobuf.stach.v3.RowOrganizedTable.Column} Column instance
                         */
                        Column.create = function create(properties) {
                            return new Column(properties);
                        };

                        /**
                         * Encodes the specified Column message. Does not implicitly {@link factset.protobuf.stach.v3.RowOrganizedTable.Column.verify|verify} messages.
                         * @function encode
                         * @memberof factset.protobuf.stach.v3.RowOrganizedTable.Column
                         * @static
                         * @param {factset.protobuf.stach.v3.RowOrganizedTable.IColumn} message Column message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Column.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                            if (message.forbidNulls != null && Object.hasOwnProperty.call(message, "forbidNulls"))
                                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.forbidNulls);
                            if (message.contextualType != null && Object.hasOwnProperty.call(message, "contextualType"))
                                writer.uint32(/* id 3, wireType 2 =*/26).string(message.contextualType);
                            if (message.customMetadata != null && Object.hasOwnProperty.call(message, "customMetadata"))
                                for (var keys = Object.keys(message.customMetadata), i = 0; i < keys.length; ++i) {
                                    writer.uint32(/* id 100, wireType 2 =*/802).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                                    $root.factset.protobuf.stach.v3.MetadataItem.encode(message.customMetadata[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                                }
                            return writer;
                        };

                        /**
                         * Encodes the specified Column message, length delimited. Does not implicitly {@link factset.protobuf.stach.v3.RowOrganizedTable.Column.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof factset.protobuf.stach.v3.RowOrganizedTable.Column
                         * @static
                         * @param {factset.protobuf.stach.v3.RowOrganizedTable.IColumn} message Column message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Column.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes a Column message from the specified reader or buffer.
                         * @function decode
                         * @memberof factset.protobuf.stach.v3.RowOrganizedTable.Column
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {factset.protobuf.stach.v3.RowOrganizedTable.Column} Column
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Column.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.factset.protobuf.stach.v3.RowOrganizedTable.Column(), key, value;
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.name = reader.string();
                                    break;
                                case 2:
                                    message.forbidNulls = reader.bool();
                                    break;
                                case 3:
                                    message.contextualType = reader.string();
                                    break;
                                case 100:
                                    if (message.customMetadata === $util.emptyObject)
                                        message.customMetadata = {};
                                    var end2 = reader.uint32() + reader.pos;
                                    key = "";
                                    value = null;
                                    while (reader.pos < end2) {
                                        var tag2 = reader.uint32();
                                        switch (tag2 >>> 3) {
                                        case 1:
                                            key = reader.string();
                                            break;
                                        case 2:
                                            value = $root.factset.protobuf.stach.v3.MetadataItem.decode(reader, reader.uint32());
                                            break;
                                        default:
                                            reader.skipType(tag2 & 7);
                                            break;
                                        }
                                    }
                                    message.customMetadata[key] = value;
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes a Column message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof factset.protobuf.stach.v3.RowOrganizedTable.Column
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {factset.protobuf.stach.v3.RowOrganizedTable.Column} Column
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Column.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies a Column message.
                         * @function verify
                         * @memberof factset.protobuf.stach.v3.RowOrganizedTable.Column
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        Column.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.name != null && message.hasOwnProperty("name"))
                                if (!$util.isString(message.name))
                                    return "name: string expected";
                            if (message.forbidNulls != null && message.hasOwnProperty("forbidNulls"))
                                if (typeof message.forbidNulls !== "boolean")
                                    return "forbidNulls: boolean expected";
                            if (message.contextualType != null && message.hasOwnProperty("contextualType"))
                                if (!$util.isString(message.contextualType))
                                    return "contextualType: string expected";
                            if (message.customMetadata != null && message.hasOwnProperty("customMetadata")) {
                                if (!$util.isObject(message.customMetadata))
                                    return "customMetadata: object expected";
                                var key = Object.keys(message.customMetadata);
                                for (var i = 0; i < key.length; ++i) {
                                    var error = $root.factset.protobuf.stach.v3.MetadataItem.verify(message.customMetadata[key[i]]);
                                    if (error)
                                        return "customMetadata." + error;
                                }
                            }
                            return null;
                        };

                        /**
                         * Creates a Column message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof factset.protobuf.stach.v3.RowOrganizedTable.Column
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {factset.protobuf.stach.v3.RowOrganizedTable.Column} Column
                         */
                        Column.fromObject = function fromObject(object) {
                            if (object instanceof $root.factset.protobuf.stach.v3.RowOrganizedTable.Column)
                                return object;
                            var message = new $root.factset.protobuf.stach.v3.RowOrganizedTable.Column();
                            if (object.name != null)
                                message.name = String(object.name);
                            if (object.forbidNulls != null)
                                message.forbidNulls = Boolean(object.forbidNulls);
                            if (object.contextualType != null)
                                message.contextualType = String(object.contextualType);
                            if (object.customMetadata) {
                                if (typeof object.customMetadata !== "object")
                                    throw TypeError(".factset.protobuf.stach.v3.RowOrganizedTable.Column.customMetadata: object expected");
                                message.customMetadata = {};
                                for (var keys = Object.keys(object.customMetadata), i = 0; i < keys.length; ++i) {
                                    if (typeof object.customMetadata[keys[i]] !== "object")
                                        throw TypeError(".factset.protobuf.stach.v3.RowOrganizedTable.Column.customMetadata: object expected");
                                    message.customMetadata[keys[i]] = $root.factset.protobuf.stach.v3.MetadataItem.fromObject(object.customMetadata[keys[i]]);
                                }
                            }
                            return message;
                        };

                        /**
                         * Creates a plain object from a Column message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof factset.protobuf.stach.v3.RowOrganizedTable.Column
                         * @static
                         * @param {factset.protobuf.stach.v3.RowOrganizedTable.Column} message Column
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        Column.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.objects || options.defaults)
                                object.customMetadata = {};
                            if (options.defaults) {
                                object.name = "";
                                object.forbidNulls = false;
                                object.contextualType = "";
                            }
                            if (message.name != null && message.hasOwnProperty("name"))
                                object.name = message.name;
                            if (message.forbidNulls != null && message.hasOwnProperty("forbidNulls"))
                                object.forbidNulls = message.forbidNulls;
                            if (message.contextualType != null && message.hasOwnProperty("contextualType"))
                                object.contextualType = message.contextualType;
                            var keys2;
                            if (message.customMetadata && (keys2 = Object.keys(message.customMetadata)).length) {
                                object.customMetadata = {};
                                for (var j = 0; j < keys2.length; ++j)
                                    object.customMetadata[keys2[j]] = $root.factset.protobuf.stach.v3.MetadataItem.toObject(message.customMetadata[keys2[j]], options);
                            }
                            return object;
                        };

                        /**
                         * Converts this Column to JSON.
                         * @function toJSON
                         * @memberof factset.protobuf.stach.v3.RowOrganizedTable.Column
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        Column.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        return Column;
                    })();

                    RowOrganizedTable.HeaderRow = (function() {

                        /**
                         * Properties of a HeaderRow.
                         * @memberof factset.protobuf.stach.v3.RowOrganizedTable
                         * @interface IHeaderRow
                         * @property {Array.<factset.protobuf.stach.v3.RowOrganizedTable.IHeaderCell>|null} [cells] HeaderRow cells
                         */

                        /**
                         * Constructs a new HeaderRow.
                         * @memberof factset.protobuf.stach.v3.RowOrganizedTable
                         * @classdesc Represents a HeaderRow.
                         * @implements IHeaderRow
                         * @constructor
                         * @param {factset.protobuf.stach.v3.RowOrganizedTable.IHeaderRow=} [properties] Properties to set
                         */
                        function HeaderRow(properties) {
                            this.cells = [];
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * HeaderRow cells.
                         * @member {Array.<factset.protobuf.stach.v3.RowOrganizedTable.IHeaderCell>} cells
                         * @memberof factset.protobuf.stach.v3.RowOrganizedTable.HeaderRow
                         * @instance
                         */
                        HeaderRow.prototype.cells = $util.emptyArray;

                        /**
                         * Creates a new HeaderRow instance using the specified properties.
                         * @function create
                         * @memberof factset.protobuf.stach.v3.RowOrganizedTable.HeaderRow
                         * @static
                         * @param {factset.protobuf.stach.v3.RowOrganizedTable.IHeaderRow=} [properties] Properties to set
                         * @returns {factset.protobuf.stach.v3.RowOrganizedTable.HeaderRow} HeaderRow instance
                         */
                        HeaderRow.create = function create(properties) {
                            return new HeaderRow(properties);
                        };

                        /**
                         * Encodes the specified HeaderRow message. Does not implicitly {@link factset.protobuf.stach.v3.RowOrganizedTable.HeaderRow.verify|verify} messages.
                         * @function encode
                         * @memberof factset.protobuf.stach.v3.RowOrganizedTable.HeaderRow
                         * @static
                         * @param {factset.protobuf.stach.v3.RowOrganizedTable.IHeaderRow} message HeaderRow message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        HeaderRow.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.cells != null && message.cells.length)
                                for (var i = 0; i < message.cells.length; ++i)
                                    $root.factset.protobuf.stach.v3.RowOrganizedTable.HeaderCell.encode(message.cells[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                            return writer;
                        };

                        /**
                         * Encodes the specified HeaderRow message, length delimited. Does not implicitly {@link factset.protobuf.stach.v3.RowOrganizedTable.HeaderRow.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof factset.protobuf.stach.v3.RowOrganizedTable.HeaderRow
                         * @static
                         * @param {factset.protobuf.stach.v3.RowOrganizedTable.IHeaderRow} message HeaderRow message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        HeaderRow.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes a HeaderRow message from the specified reader or buffer.
                         * @function decode
                         * @memberof factset.protobuf.stach.v3.RowOrganizedTable.HeaderRow
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {factset.protobuf.stach.v3.RowOrganizedTable.HeaderRow} HeaderRow
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        HeaderRow.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.factset.protobuf.stach.v3.RowOrganizedTable.HeaderRow();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    if (!(message.cells && message.cells.length))
                                        message.cells = [];
                                    message.cells.push($root.factset.protobuf.stach.v3.RowOrganizedTable.HeaderCell.decode(reader, reader.uint32()));
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes a HeaderRow message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof factset.protobuf.stach.v3.RowOrganizedTable.HeaderRow
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {factset.protobuf.stach.v3.RowOrganizedTable.HeaderRow} HeaderRow
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        HeaderRow.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies a HeaderRow message.
                         * @function verify
                         * @memberof factset.protobuf.stach.v3.RowOrganizedTable.HeaderRow
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        HeaderRow.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.cells != null && message.hasOwnProperty("cells")) {
                                if (!Array.isArray(message.cells))
                                    return "cells: array expected";
                                for (var i = 0; i < message.cells.length; ++i) {
                                    var error = $root.factset.protobuf.stach.v3.RowOrganizedTable.HeaderCell.verify(message.cells[i]);
                                    if (error)
                                        return "cells." + error;
                                }
                            }
                            return null;
                        };

                        /**
                         * Creates a HeaderRow message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof factset.protobuf.stach.v3.RowOrganizedTable.HeaderRow
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {factset.protobuf.stach.v3.RowOrganizedTable.HeaderRow} HeaderRow
                         */
                        HeaderRow.fromObject = function fromObject(object) {
                            if (object instanceof $root.factset.protobuf.stach.v3.RowOrganizedTable.HeaderRow)
                                return object;
                            var message = new $root.factset.protobuf.stach.v3.RowOrganizedTable.HeaderRow();
                            if (object.cells) {
                                if (!Array.isArray(object.cells))
                                    throw TypeError(".factset.protobuf.stach.v3.RowOrganizedTable.HeaderRow.cells: array expected");
                                message.cells = [];
                                for (var i = 0; i < object.cells.length; ++i) {
                                    if (typeof object.cells[i] !== "object")
                                        throw TypeError(".factset.protobuf.stach.v3.RowOrganizedTable.HeaderRow.cells: object expected");
                                    message.cells[i] = $root.factset.protobuf.stach.v3.RowOrganizedTable.HeaderCell.fromObject(object.cells[i]);
                                }
                            }
                            return message;
                        };

                        /**
                         * Creates a plain object from a HeaderRow message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof factset.protobuf.stach.v3.RowOrganizedTable.HeaderRow
                         * @static
                         * @param {factset.protobuf.stach.v3.RowOrganizedTable.HeaderRow} message HeaderRow
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        HeaderRow.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.arrays || options.defaults)
                                object.cells = [];
                            if (message.cells && message.cells.length) {
                                object.cells = [];
                                for (var j = 0; j < message.cells.length; ++j)
                                    object.cells[j] = $root.factset.protobuf.stach.v3.RowOrganizedTable.HeaderCell.toObject(message.cells[j], options);
                            }
                            return object;
                        };

                        /**
                         * Converts this HeaderRow to JSON.
                         * @function toJSON
                         * @memberof factset.protobuf.stach.v3.RowOrganizedTable.HeaderRow
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        HeaderRow.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        return HeaderRow;
                    })();

                    RowOrganizedTable.HeaderCell = (function() {

                        /**
                         * Properties of a HeaderCell.
                         * @memberof factset.protobuf.stach.v3.RowOrganizedTable
                         * @interface IHeaderCell
                         * @property {number|null} [colspan] HeaderCell colspan
                         * @property {number|null} [rowspan] HeaderCell rowspan
                         * @property {google.protobuf.IValue|null} [value] HeaderCell value
                         */

                        /**
                         * Constructs a new HeaderCell.
                         * @memberof factset.protobuf.stach.v3.RowOrganizedTable
                         * @classdesc Represents a HeaderCell.
                         * @implements IHeaderCell
                         * @constructor
                         * @param {factset.protobuf.stach.v3.RowOrganizedTable.IHeaderCell=} [properties] Properties to set
                         */
                        function HeaderCell(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * HeaderCell colspan.
                         * @member {number} colspan
                         * @memberof factset.protobuf.stach.v3.RowOrganizedTable.HeaderCell
                         * @instance
                         */
                        HeaderCell.prototype.colspan = 0;

                        /**
                         * HeaderCell rowspan.
                         * @member {number} rowspan
                         * @memberof factset.protobuf.stach.v3.RowOrganizedTable.HeaderCell
                         * @instance
                         */
                        HeaderCell.prototype.rowspan = 0;

                        /**
                         * HeaderCell value.
                         * @member {google.protobuf.IValue|null|undefined} value
                         * @memberof factset.protobuf.stach.v3.RowOrganizedTable.HeaderCell
                         * @instance
                         */
                        HeaderCell.prototype.value = null;

                        /**
                         * Creates a new HeaderCell instance using the specified properties.
                         * @function create
                         * @memberof factset.protobuf.stach.v3.RowOrganizedTable.HeaderCell
                         * @static
                         * @param {factset.protobuf.stach.v3.RowOrganizedTable.IHeaderCell=} [properties] Properties to set
                         * @returns {factset.protobuf.stach.v3.RowOrganizedTable.HeaderCell} HeaderCell instance
                         */
                        HeaderCell.create = function create(properties) {
                            return new HeaderCell(properties);
                        };

                        /**
                         * Encodes the specified HeaderCell message. Does not implicitly {@link factset.protobuf.stach.v3.RowOrganizedTable.HeaderCell.verify|verify} messages.
                         * @function encode
                         * @memberof factset.protobuf.stach.v3.RowOrganizedTable.HeaderCell
                         * @static
                         * @param {factset.protobuf.stach.v3.RowOrganizedTable.IHeaderCell} message HeaderCell message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        HeaderCell.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.colspan != null && Object.hasOwnProperty.call(message, "colspan"))
                                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.colspan);
                            if (message.rowspan != null && Object.hasOwnProperty.call(message, "rowspan"))
                                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.rowspan);
                            if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                                $root.google.protobuf.Value.encode(message.value, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                            return writer;
                        };

                        /**
                         * Encodes the specified HeaderCell message, length delimited. Does not implicitly {@link factset.protobuf.stach.v3.RowOrganizedTable.HeaderCell.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof factset.protobuf.stach.v3.RowOrganizedTable.HeaderCell
                         * @static
                         * @param {factset.protobuf.stach.v3.RowOrganizedTable.IHeaderCell} message HeaderCell message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        HeaderCell.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes a HeaderCell message from the specified reader or buffer.
                         * @function decode
                         * @memberof factset.protobuf.stach.v3.RowOrganizedTable.HeaderCell
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {factset.protobuf.stach.v3.RowOrganizedTable.HeaderCell} HeaderCell
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        HeaderCell.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.factset.protobuf.stach.v3.RowOrganizedTable.HeaderCell();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.colspan = reader.uint32();
                                    break;
                                case 2:
                                    message.rowspan = reader.uint32();
                                    break;
                                case 3:
                                    message.value = $root.google.protobuf.Value.decode(reader, reader.uint32());
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes a HeaderCell message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof factset.protobuf.stach.v3.RowOrganizedTable.HeaderCell
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {factset.protobuf.stach.v3.RowOrganizedTable.HeaderCell} HeaderCell
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        HeaderCell.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies a HeaderCell message.
                         * @function verify
                         * @memberof factset.protobuf.stach.v3.RowOrganizedTable.HeaderCell
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        HeaderCell.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.colspan != null && message.hasOwnProperty("colspan"))
                                if (!$util.isInteger(message.colspan))
                                    return "colspan: integer expected";
                            if (message.rowspan != null && message.hasOwnProperty("rowspan"))
                                if (!$util.isInteger(message.rowspan))
                                    return "rowspan: integer expected";
                            if (message.value != null && message.hasOwnProperty("value")) {
                                var error = $root.google.protobuf.Value.verify(message.value);
                                if (error)
                                    return "value." + error;
                            }
                            return null;
                        };

                        /**
                         * Creates a HeaderCell message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof factset.protobuf.stach.v3.RowOrganizedTable.HeaderCell
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {factset.protobuf.stach.v3.RowOrganizedTable.HeaderCell} HeaderCell
                         */
                        HeaderCell.fromObject = function fromObject(object) {
                            if (object instanceof $root.factset.protobuf.stach.v3.RowOrganizedTable.HeaderCell)
                                return object;
                            var message = new $root.factset.protobuf.stach.v3.RowOrganizedTable.HeaderCell();
                            if (object.colspan != null)
                                message.colspan = object.colspan >>> 0;
                            if (object.rowspan != null)
                                message.rowspan = object.rowspan >>> 0;
                            if (object.value != null) {
                                message.value = $root.google.protobuf.Value.fromObject(object.value);
                            }
                            return message;
                        };

                        /**
                         * Creates a plain object from a HeaderCell message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof factset.protobuf.stach.v3.RowOrganizedTable.HeaderCell
                         * @static
                         * @param {factset.protobuf.stach.v3.RowOrganizedTable.HeaderCell} message HeaderCell
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        HeaderCell.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults) {
                                object.colspan = 0;
                                object.rowspan = 0;
                                object.value = null;
                            }
                            if (message.colspan != null && message.hasOwnProperty("colspan"))
                                object.colspan = message.colspan;
                            if (message.rowspan != null && message.hasOwnProperty("rowspan"))
                                object.rowspan = message.rowspan;
                            if (message.value != null && message.hasOwnProperty("value"))
                                object.value = $root.google.protobuf.Value.toObject(message.value, options);
                            return object;
                        };

                        /**
                         * Converts this HeaderCell to JSON.
                         * @function toJSON
                         * @memberof factset.protobuf.stach.v3.RowOrganizedTable.HeaderCell
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        HeaderCell.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        return HeaderCell;
                    })();

                    return RowOrganizedTable;
                })();

                v3.Table = (function() {

                    /**
                     * Properties of a Table.
                     * @memberof factset.protobuf.stach.v3
                     * @interface ITable
                     * @property {Array.<string>|null} [primaryKeys] Table primaryKeys
                     * @property {number|null} [totalNumRows] Table totalNumRows
                     * @property {factset.protobuf.stach.v3.Table.IGroupResult|null} [groupResult] Table groupResult
                     * @property {factset.protobuf.stach.v3.Table.ISplitResult|null} [splitResult] Table splitResult
                     * @property {Object.<string,factset.protobuf.stach.v3.IMetadataItem>|null} [customMetadata] Table customMetadata
                     */

                    /**
                     * Constructs a new Table.
                     * @memberof factset.protobuf.stach.v3
                     * @classdesc Represents a Table.
                     * @implements ITable
                     * @constructor
                     * @param {factset.protobuf.stach.v3.ITable=} [properties] Properties to set
                     */
                    function Table(properties) {
                        this.primaryKeys = [];
                        this.customMetadata = {};
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Table primaryKeys.
                     * @member {Array.<string>} primaryKeys
                     * @memberof factset.protobuf.stach.v3.Table
                     * @instance
                     */
                    Table.prototype.primaryKeys = $util.emptyArray;

                    /**
                     * Table totalNumRows.
                     * @member {number} totalNumRows
                     * @memberof factset.protobuf.stach.v3.Table
                     * @instance
                     */
                    Table.prototype.totalNumRows = 0;

                    /**
                     * Table groupResult.
                     * @member {factset.protobuf.stach.v3.Table.IGroupResult|null|undefined} groupResult
                     * @memberof factset.protobuf.stach.v3.Table
                     * @instance
                     */
                    Table.prototype.groupResult = null;

                    /**
                     * Table splitResult.
                     * @member {factset.protobuf.stach.v3.Table.ISplitResult|null|undefined} splitResult
                     * @memberof factset.protobuf.stach.v3.Table
                     * @instance
                     */
                    Table.prototype.splitResult = null;

                    /**
                     * Table customMetadata.
                     * @member {Object.<string,factset.protobuf.stach.v3.IMetadataItem>} customMetadata
                     * @memberof factset.protobuf.stach.v3.Table
                     * @instance
                     */
                    Table.prototype.customMetadata = $util.emptyObject;

                    /**
                     * Creates a new Table instance using the specified properties.
                     * @function create
                     * @memberof factset.protobuf.stach.v3.Table
                     * @static
                     * @param {factset.protobuf.stach.v3.ITable=} [properties] Properties to set
                     * @returns {factset.protobuf.stach.v3.Table} Table instance
                     */
                    Table.create = function create(properties) {
                        return new Table(properties);
                    };

                    /**
                     * Encodes the specified Table message. Does not implicitly {@link factset.protobuf.stach.v3.Table.verify|verify} messages.
                     * @function encode
                     * @memberof factset.protobuf.stach.v3.Table
                     * @static
                     * @param {factset.protobuf.stach.v3.ITable} message Table message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Table.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.primaryKeys != null && message.primaryKeys.length)
                            for (var i = 0; i < message.primaryKeys.length; ++i)
                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.primaryKeys[i]);
                        if (message.totalNumRows != null && Object.hasOwnProperty.call(message, "totalNumRows"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.totalNumRows);
                        if (message.groupResult != null && Object.hasOwnProperty.call(message, "groupResult"))
                            $root.factset.protobuf.stach.v3.Table.GroupResult.encode(message.groupResult, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                        if (message.splitResult != null && Object.hasOwnProperty.call(message, "splitResult"))
                            $root.factset.protobuf.stach.v3.Table.SplitResult.encode(message.splitResult, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                        if (message.customMetadata != null && Object.hasOwnProperty.call(message, "customMetadata"))
                            for (var keys = Object.keys(message.customMetadata), i = 0; i < keys.length; ++i) {
                                writer.uint32(/* id 100, wireType 2 =*/802).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                                $root.factset.protobuf.stach.v3.MetadataItem.encode(message.customMetadata[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                            }
                        return writer;
                    };

                    /**
                     * Encodes the specified Table message, length delimited. Does not implicitly {@link factset.protobuf.stach.v3.Table.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof factset.protobuf.stach.v3.Table
                     * @static
                     * @param {factset.protobuf.stach.v3.ITable} message Table message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Table.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a Table message from the specified reader or buffer.
                     * @function decode
                     * @memberof factset.protobuf.stach.v3.Table
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {factset.protobuf.stach.v3.Table} Table
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Table.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.factset.protobuf.stach.v3.Table(), key, value;
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                if (!(message.primaryKeys && message.primaryKeys.length))
                                    message.primaryKeys = [];
                                message.primaryKeys.push(reader.string());
                                break;
                            case 2:
                                message.totalNumRows = reader.int32();
                                break;
                            case 3:
                                message.groupResult = $root.factset.protobuf.stach.v3.Table.GroupResult.decode(reader, reader.uint32());
                                break;
                            case 4:
                                message.splitResult = $root.factset.protobuf.stach.v3.Table.SplitResult.decode(reader, reader.uint32());
                                break;
                            case 100:
                                if (message.customMetadata === $util.emptyObject)
                                    message.customMetadata = {};
                                var end2 = reader.uint32() + reader.pos;
                                key = "";
                                value = null;
                                while (reader.pos < end2) {
                                    var tag2 = reader.uint32();
                                    switch (tag2 >>> 3) {
                                    case 1:
                                        key = reader.string();
                                        break;
                                    case 2:
                                        value = $root.factset.protobuf.stach.v3.MetadataItem.decode(reader, reader.uint32());
                                        break;
                                    default:
                                        reader.skipType(tag2 & 7);
                                        break;
                                    }
                                }
                                message.customMetadata[key] = value;
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a Table message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof factset.protobuf.stach.v3.Table
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {factset.protobuf.stach.v3.Table} Table
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Table.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a Table message.
                     * @function verify
                     * @memberof factset.protobuf.stach.v3.Table
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Table.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.primaryKeys != null && message.hasOwnProperty("primaryKeys")) {
                            if (!Array.isArray(message.primaryKeys))
                                return "primaryKeys: array expected";
                            for (var i = 0; i < message.primaryKeys.length; ++i)
                                if (!$util.isString(message.primaryKeys[i]))
                                    return "primaryKeys: string[] expected";
                        }
                        if (message.totalNumRows != null && message.hasOwnProperty("totalNumRows"))
                            if (!$util.isInteger(message.totalNumRows))
                                return "totalNumRows: integer expected";
                        if (message.groupResult != null && message.hasOwnProperty("groupResult")) {
                            var error = $root.factset.protobuf.stach.v3.Table.GroupResult.verify(message.groupResult);
                            if (error)
                                return "groupResult." + error;
                        }
                        if (message.splitResult != null && message.hasOwnProperty("splitResult")) {
                            var error = $root.factset.protobuf.stach.v3.Table.SplitResult.verify(message.splitResult);
                            if (error)
                                return "splitResult." + error;
                        }
                        if (message.customMetadata != null && message.hasOwnProperty("customMetadata")) {
                            if (!$util.isObject(message.customMetadata))
                                return "customMetadata: object expected";
                            var key = Object.keys(message.customMetadata);
                            for (var i = 0; i < key.length; ++i) {
                                var error = $root.factset.protobuf.stach.v3.MetadataItem.verify(message.customMetadata[key[i]]);
                                if (error)
                                    return "customMetadata." + error;
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates a Table message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof factset.protobuf.stach.v3.Table
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {factset.protobuf.stach.v3.Table} Table
                     */
                    Table.fromObject = function fromObject(object) {
                        if (object instanceof $root.factset.protobuf.stach.v3.Table)
                            return object;
                        var message = new $root.factset.protobuf.stach.v3.Table();
                        if (object.primaryKeys) {
                            if (!Array.isArray(object.primaryKeys))
                                throw TypeError(".factset.protobuf.stach.v3.Table.primaryKeys: array expected");
                            message.primaryKeys = [];
                            for (var i = 0; i < object.primaryKeys.length; ++i)
                                message.primaryKeys[i] = String(object.primaryKeys[i]);
                        }
                        if (object.totalNumRows != null)
                            message.totalNumRows = object.totalNumRows | 0;
                        if (object.groupResult != null) {
                            if (typeof object.groupResult !== "object")
                                throw TypeError(".factset.protobuf.stach.v3.Table.groupResult: object expected");
                            message.groupResult = $root.factset.protobuf.stach.v3.Table.GroupResult.fromObject(object.groupResult);
                        }
                        if (object.splitResult != null) {
                            if (typeof object.splitResult !== "object")
                                throw TypeError(".factset.protobuf.stach.v3.Table.splitResult: object expected");
                            message.splitResult = $root.factset.protobuf.stach.v3.Table.SplitResult.fromObject(object.splitResult);
                        }
                        if (object.customMetadata) {
                            if (typeof object.customMetadata !== "object")
                                throw TypeError(".factset.protobuf.stach.v3.Table.customMetadata: object expected");
                            message.customMetadata = {};
                            for (var keys = Object.keys(object.customMetadata), i = 0; i < keys.length; ++i) {
                                if (typeof object.customMetadata[keys[i]] !== "object")
                                    throw TypeError(".factset.protobuf.stach.v3.Table.customMetadata: object expected");
                                message.customMetadata[keys[i]] = $root.factset.protobuf.stach.v3.MetadataItem.fromObject(object.customMetadata[keys[i]]);
                            }
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a Table message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof factset.protobuf.stach.v3.Table
                     * @static
                     * @param {factset.protobuf.stach.v3.Table} message Table
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Table.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.primaryKeys = [];
                        if (options.objects || options.defaults)
                            object.customMetadata = {};
                        if (options.defaults) {
                            object.totalNumRows = 0;
                            object.groupResult = null;
                            object.splitResult = null;
                        }
                        if (message.primaryKeys && message.primaryKeys.length) {
                            object.primaryKeys = [];
                            for (var j = 0; j < message.primaryKeys.length; ++j)
                                object.primaryKeys[j] = message.primaryKeys[j];
                        }
                        if (message.totalNumRows != null && message.hasOwnProperty("totalNumRows"))
                            object.totalNumRows = message.totalNumRows;
                        if (message.groupResult != null && message.hasOwnProperty("groupResult"))
                            object.groupResult = $root.factset.protobuf.stach.v3.Table.GroupResult.toObject(message.groupResult, options);
                        if (message.splitResult != null && message.hasOwnProperty("splitResult"))
                            object.splitResult = $root.factset.protobuf.stach.v3.Table.SplitResult.toObject(message.splitResult, options);
                        var keys2;
                        if (message.customMetadata && (keys2 = Object.keys(message.customMetadata)).length) {
                            object.customMetadata = {};
                            for (var j = 0; j < keys2.length; ++j)
                                object.customMetadata[keys2[j]] = $root.factset.protobuf.stach.v3.MetadataItem.toObject(message.customMetadata[keys2[j]], options);
                        }
                        return object;
                    };

                    /**
                     * Converts this Table to JSON.
                     * @function toJSON
                     * @memberof factset.protobuf.stach.v3.Table
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Table.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    Table.GroupResult = (function() {

                        /**
                         * Properties of a GroupResult.
                         * @memberof factset.protobuf.stach.v3.Table
                         * @interface IGroupResult
                         * @property {Array.<string>|null} [by] GroupResult by
                         * @property {factset.protobuf.stach.v3.Table.ICollapsedColumnResult|null} [collapsedColumnResult] GroupResult collapsedColumnResult
                         * @property {string|null} [rowPath] GroupResult rowPath
                         * @property {string|null} [aggregateRows] GroupResult aggregateRows
                         * @property {string|null} [level] GroupResult level
                         */

                        /**
                         * Constructs a new GroupResult.
                         * @memberof factset.protobuf.stach.v3.Table
                         * @classdesc Represents a GroupResult.
                         * @implements IGroupResult
                         * @constructor
                         * @param {factset.protobuf.stach.v3.Table.IGroupResult=} [properties] Properties to set
                         */
                        function GroupResult(properties) {
                            this.by = [];
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * GroupResult by.
                         * @member {Array.<string>} by
                         * @memberof factset.protobuf.stach.v3.Table.GroupResult
                         * @instance
                         */
                        GroupResult.prototype.by = $util.emptyArray;

                        /**
                         * GroupResult collapsedColumnResult.
                         * @member {factset.protobuf.stach.v3.Table.ICollapsedColumnResult|null|undefined} collapsedColumnResult
                         * @memberof factset.protobuf.stach.v3.Table.GroupResult
                         * @instance
                         */
                        GroupResult.prototype.collapsedColumnResult = null;

                        /**
                         * GroupResult rowPath.
                         * @member {string} rowPath
                         * @memberof factset.protobuf.stach.v3.Table.GroupResult
                         * @instance
                         */
                        GroupResult.prototype.rowPath = "";

                        /**
                         * GroupResult aggregateRows.
                         * @member {string} aggregateRows
                         * @memberof factset.protobuf.stach.v3.Table.GroupResult
                         * @instance
                         */
                        GroupResult.prototype.aggregateRows = "";

                        /**
                         * GroupResult level.
                         * @member {string} level
                         * @memberof factset.protobuf.stach.v3.Table.GroupResult
                         * @instance
                         */
                        GroupResult.prototype.level = "";

                        /**
                         * Creates a new GroupResult instance using the specified properties.
                         * @function create
                         * @memberof factset.protobuf.stach.v3.Table.GroupResult
                         * @static
                         * @param {factset.protobuf.stach.v3.Table.IGroupResult=} [properties] Properties to set
                         * @returns {factset.protobuf.stach.v3.Table.GroupResult} GroupResult instance
                         */
                        GroupResult.create = function create(properties) {
                            return new GroupResult(properties);
                        };

                        /**
                         * Encodes the specified GroupResult message. Does not implicitly {@link factset.protobuf.stach.v3.Table.GroupResult.verify|verify} messages.
                         * @function encode
                         * @memberof factset.protobuf.stach.v3.Table.GroupResult
                         * @static
                         * @param {factset.protobuf.stach.v3.Table.IGroupResult} message GroupResult message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        GroupResult.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.by != null && message.by.length)
                                for (var i = 0; i < message.by.length; ++i)
                                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.by[i]);
                            if (message.collapsedColumnResult != null && Object.hasOwnProperty.call(message, "collapsedColumnResult"))
                                $root.factset.protobuf.stach.v3.Table.CollapsedColumnResult.encode(message.collapsedColumnResult, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                            if (message.rowPath != null && Object.hasOwnProperty.call(message, "rowPath"))
                                writer.uint32(/* id 3, wireType 2 =*/26).string(message.rowPath);
                            if (message.aggregateRows != null && Object.hasOwnProperty.call(message, "aggregateRows"))
                                writer.uint32(/* id 4, wireType 2 =*/34).string(message.aggregateRows);
                            if (message.level != null && Object.hasOwnProperty.call(message, "level"))
                                writer.uint32(/* id 5, wireType 2 =*/42).string(message.level);
                            return writer;
                        };

                        /**
                         * Encodes the specified GroupResult message, length delimited. Does not implicitly {@link factset.protobuf.stach.v3.Table.GroupResult.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof factset.protobuf.stach.v3.Table.GroupResult
                         * @static
                         * @param {factset.protobuf.stach.v3.Table.IGroupResult} message GroupResult message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        GroupResult.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes a GroupResult message from the specified reader or buffer.
                         * @function decode
                         * @memberof factset.protobuf.stach.v3.Table.GroupResult
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {factset.protobuf.stach.v3.Table.GroupResult} GroupResult
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        GroupResult.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.factset.protobuf.stach.v3.Table.GroupResult();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    if (!(message.by && message.by.length))
                                        message.by = [];
                                    message.by.push(reader.string());
                                    break;
                                case 2:
                                    message.collapsedColumnResult = $root.factset.protobuf.stach.v3.Table.CollapsedColumnResult.decode(reader, reader.uint32());
                                    break;
                                case 3:
                                    message.rowPath = reader.string();
                                    break;
                                case 4:
                                    message.aggregateRows = reader.string();
                                    break;
                                case 5:
                                    message.level = reader.string();
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes a GroupResult message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof factset.protobuf.stach.v3.Table.GroupResult
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {factset.protobuf.stach.v3.Table.GroupResult} GroupResult
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        GroupResult.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies a GroupResult message.
                         * @function verify
                         * @memberof factset.protobuf.stach.v3.Table.GroupResult
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        GroupResult.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.by != null && message.hasOwnProperty("by")) {
                                if (!Array.isArray(message.by))
                                    return "by: array expected";
                                for (var i = 0; i < message.by.length; ++i)
                                    if (!$util.isString(message.by[i]))
                                        return "by: string[] expected";
                            }
                            if (message.collapsedColumnResult != null && message.hasOwnProperty("collapsedColumnResult")) {
                                var error = $root.factset.protobuf.stach.v3.Table.CollapsedColumnResult.verify(message.collapsedColumnResult);
                                if (error)
                                    return "collapsedColumnResult." + error;
                            }
                            if (message.rowPath != null && message.hasOwnProperty("rowPath"))
                                if (!$util.isString(message.rowPath))
                                    return "rowPath: string expected";
                            if (message.aggregateRows != null && message.hasOwnProperty("aggregateRows"))
                                if (!$util.isString(message.aggregateRows))
                                    return "aggregateRows: string expected";
                            if (message.level != null && message.hasOwnProperty("level"))
                                if (!$util.isString(message.level))
                                    return "level: string expected";
                            return null;
                        };

                        /**
                         * Creates a GroupResult message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof factset.protobuf.stach.v3.Table.GroupResult
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {factset.protobuf.stach.v3.Table.GroupResult} GroupResult
                         */
                        GroupResult.fromObject = function fromObject(object) {
                            if (object instanceof $root.factset.protobuf.stach.v3.Table.GroupResult)
                                return object;
                            var message = new $root.factset.protobuf.stach.v3.Table.GroupResult();
                            if (object.by) {
                                if (!Array.isArray(object.by))
                                    throw TypeError(".factset.protobuf.stach.v3.Table.GroupResult.by: array expected");
                                message.by = [];
                                for (var i = 0; i < object.by.length; ++i)
                                    message.by[i] = String(object.by[i]);
                            }
                            if (object.collapsedColumnResult != null) {
                                if (typeof object.collapsedColumnResult !== "object")
                                    throw TypeError(".factset.protobuf.stach.v3.Table.GroupResult.collapsedColumnResult: object expected");
                                message.collapsedColumnResult = $root.factset.protobuf.stach.v3.Table.CollapsedColumnResult.fromObject(object.collapsedColumnResult);
                            }
                            if (object.rowPath != null)
                                message.rowPath = String(object.rowPath);
                            if (object.aggregateRows != null)
                                message.aggregateRows = String(object.aggregateRows);
                            if (object.level != null)
                                message.level = String(object.level);
                            return message;
                        };

                        /**
                         * Creates a plain object from a GroupResult message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof factset.protobuf.stach.v3.Table.GroupResult
                         * @static
                         * @param {factset.protobuf.stach.v3.Table.GroupResult} message GroupResult
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        GroupResult.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.arrays || options.defaults)
                                object.by = [];
                            if (options.defaults) {
                                object.collapsedColumnResult = null;
                                object.rowPath = "";
                                object.aggregateRows = "";
                                object.level = "";
                            }
                            if (message.by && message.by.length) {
                                object.by = [];
                                for (var j = 0; j < message.by.length; ++j)
                                    object.by[j] = message.by[j];
                            }
                            if (message.collapsedColumnResult != null && message.hasOwnProperty("collapsedColumnResult"))
                                object.collapsedColumnResult = $root.factset.protobuf.stach.v3.Table.CollapsedColumnResult.toObject(message.collapsedColumnResult, options);
                            if (message.rowPath != null && message.hasOwnProperty("rowPath"))
                                object.rowPath = message.rowPath;
                            if (message.aggregateRows != null && message.hasOwnProperty("aggregateRows"))
                                object.aggregateRows = message.aggregateRows;
                            if (message.level != null && message.hasOwnProperty("level"))
                                object.level = message.level;
                            return object;
                        };

                        /**
                         * Converts this GroupResult to JSON.
                         * @function toJSON
                         * @memberof factset.protobuf.stach.v3.Table.GroupResult
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        GroupResult.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        return GroupResult;
                    })();

                    Table.CollapsedColumnResult = (function() {

                        /**
                         * Properties of a CollapsedColumnResult.
                         * @memberof factset.protobuf.stach.v3.Table
                         * @interface ICollapsedColumnResult
                         * @property {string|null} [name] CollapsedColumnResult name
                         */

                        /**
                         * Constructs a new CollapsedColumnResult.
                         * @memberof factset.protobuf.stach.v3.Table
                         * @classdesc Represents a CollapsedColumnResult.
                         * @implements ICollapsedColumnResult
                         * @constructor
                         * @param {factset.protobuf.stach.v3.Table.ICollapsedColumnResult=} [properties] Properties to set
                         */
                        function CollapsedColumnResult(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * CollapsedColumnResult name.
                         * @member {string} name
                         * @memberof factset.protobuf.stach.v3.Table.CollapsedColumnResult
                         * @instance
                         */
                        CollapsedColumnResult.prototype.name = "";

                        /**
                         * Creates a new CollapsedColumnResult instance using the specified properties.
                         * @function create
                         * @memberof factset.protobuf.stach.v3.Table.CollapsedColumnResult
                         * @static
                         * @param {factset.protobuf.stach.v3.Table.ICollapsedColumnResult=} [properties] Properties to set
                         * @returns {factset.protobuf.stach.v3.Table.CollapsedColumnResult} CollapsedColumnResult instance
                         */
                        CollapsedColumnResult.create = function create(properties) {
                            return new CollapsedColumnResult(properties);
                        };

                        /**
                         * Encodes the specified CollapsedColumnResult message. Does not implicitly {@link factset.protobuf.stach.v3.Table.CollapsedColumnResult.verify|verify} messages.
                         * @function encode
                         * @memberof factset.protobuf.stach.v3.Table.CollapsedColumnResult
                         * @static
                         * @param {factset.protobuf.stach.v3.Table.ICollapsedColumnResult} message CollapsedColumnResult message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        CollapsedColumnResult.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                            return writer;
                        };

                        /**
                         * Encodes the specified CollapsedColumnResult message, length delimited. Does not implicitly {@link factset.protobuf.stach.v3.Table.CollapsedColumnResult.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof factset.protobuf.stach.v3.Table.CollapsedColumnResult
                         * @static
                         * @param {factset.protobuf.stach.v3.Table.ICollapsedColumnResult} message CollapsedColumnResult message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        CollapsedColumnResult.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes a CollapsedColumnResult message from the specified reader or buffer.
                         * @function decode
                         * @memberof factset.protobuf.stach.v3.Table.CollapsedColumnResult
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {factset.protobuf.stach.v3.Table.CollapsedColumnResult} CollapsedColumnResult
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        CollapsedColumnResult.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.factset.protobuf.stach.v3.Table.CollapsedColumnResult();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.name = reader.string();
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes a CollapsedColumnResult message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof factset.protobuf.stach.v3.Table.CollapsedColumnResult
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {factset.protobuf.stach.v3.Table.CollapsedColumnResult} CollapsedColumnResult
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        CollapsedColumnResult.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies a CollapsedColumnResult message.
                         * @function verify
                         * @memberof factset.protobuf.stach.v3.Table.CollapsedColumnResult
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        CollapsedColumnResult.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.name != null && message.hasOwnProperty("name"))
                                if (!$util.isString(message.name))
                                    return "name: string expected";
                            return null;
                        };

                        /**
                         * Creates a CollapsedColumnResult message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof factset.protobuf.stach.v3.Table.CollapsedColumnResult
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {factset.protobuf.stach.v3.Table.CollapsedColumnResult} CollapsedColumnResult
                         */
                        CollapsedColumnResult.fromObject = function fromObject(object) {
                            if (object instanceof $root.factset.protobuf.stach.v3.Table.CollapsedColumnResult)
                                return object;
                            var message = new $root.factset.protobuf.stach.v3.Table.CollapsedColumnResult();
                            if (object.name != null)
                                message.name = String(object.name);
                            return message;
                        };

                        /**
                         * Creates a plain object from a CollapsedColumnResult message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof factset.protobuf.stach.v3.Table.CollapsedColumnResult
                         * @static
                         * @param {factset.protobuf.stach.v3.Table.CollapsedColumnResult} message CollapsedColumnResult
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        CollapsedColumnResult.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults)
                                object.name = "";
                            if (message.name != null && message.hasOwnProperty("name"))
                                object.name = message.name;
                            return object;
                        };

                        /**
                         * Converts this CollapsedColumnResult to JSON.
                         * @function toJSON
                         * @memberof factset.protobuf.stach.v3.Table.CollapsedColumnResult
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        CollapsedColumnResult.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        return CollapsedColumnResult;
                    })();

                    Table.SplitResult = (function() {

                        /**
                         * Properties of a SplitResult.
                         * @memberof factset.protobuf.stach.v3.Table
                         * @interface ISplitResult
                         * @property {string|null} [multiLevelHeadersTableReference] SplitResult multiLevelHeadersTableReference
                         */

                        /**
                         * Constructs a new SplitResult.
                         * @memberof factset.protobuf.stach.v3.Table
                         * @classdesc Represents a SplitResult.
                         * @implements ISplitResult
                         * @constructor
                         * @param {factset.protobuf.stach.v3.Table.ISplitResult=} [properties] Properties to set
                         */
                        function SplitResult(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * SplitResult multiLevelHeadersTableReference.
                         * @member {string} multiLevelHeadersTableReference
                         * @memberof factset.protobuf.stach.v3.Table.SplitResult
                         * @instance
                         */
                        SplitResult.prototype.multiLevelHeadersTableReference = "";

                        /**
                         * Creates a new SplitResult instance using the specified properties.
                         * @function create
                         * @memberof factset.protobuf.stach.v3.Table.SplitResult
                         * @static
                         * @param {factset.protobuf.stach.v3.Table.ISplitResult=} [properties] Properties to set
                         * @returns {factset.protobuf.stach.v3.Table.SplitResult} SplitResult instance
                         */
                        SplitResult.create = function create(properties) {
                            return new SplitResult(properties);
                        };

                        /**
                         * Encodes the specified SplitResult message. Does not implicitly {@link factset.protobuf.stach.v3.Table.SplitResult.verify|verify} messages.
                         * @function encode
                         * @memberof factset.protobuf.stach.v3.Table.SplitResult
                         * @static
                         * @param {factset.protobuf.stach.v3.Table.ISplitResult} message SplitResult message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        SplitResult.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.multiLevelHeadersTableReference != null && Object.hasOwnProperty.call(message, "multiLevelHeadersTableReference"))
                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.multiLevelHeadersTableReference);
                            return writer;
                        };

                        /**
                         * Encodes the specified SplitResult message, length delimited. Does not implicitly {@link factset.protobuf.stach.v3.Table.SplitResult.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof factset.protobuf.stach.v3.Table.SplitResult
                         * @static
                         * @param {factset.protobuf.stach.v3.Table.ISplitResult} message SplitResult message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        SplitResult.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes a SplitResult message from the specified reader or buffer.
                         * @function decode
                         * @memberof factset.protobuf.stach.v3.Table.SplitResult
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {factset.protobuf.stach.v3.Table.SplitResult} SplitResult
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        SplitResult.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.factset.protobuf.stach.v3.Table.SplitResult();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.multiLevelHeadersTableReference = reader.string();
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes a SplitResult message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof factset.protobuf.stach.v3.Table.SplitResult
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {factset.protobuf.stach.v3.Table.SplitResult} SplitResult
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        SplitResult.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies a SplitResult message.
                         * @function verify
                         * @memberof factset.protobuf.stach.v3.Table.SplitResult
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        SplitResult.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.multiLevelHeadersTableReference != null && message.hasOwnProperty("multiLevelHeadersTableReference"))
                                if (!$util.isString(message.multiLevelHeadersTableReference))
                                    return "multiLevelHeadersTableReference: string expected";
                            return null;
                        };

                        /**
                         * Creates a SplitResult message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof factset.protobuf.stach.v3.Table.SplitResult
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {factset.protobuf.stach.v3.Table.SplitResult} SplitResult
                         */
                        SplitResult.fromObject = function fromObject(object) {
                            if (object instanceof $root.factset.protobuf.stach.v3.Table.SplitResult)
                                return object;
                            var message = new $root.factset.protobuf.stach.v3.Table.SplitResult();
                            if (object.multiLevelHeadersTableReference != null)
                                message.multiLevelHeadersTableReference = String(object.multiLevelHeadersTableReference);
                            return message;
                        };

                        /**
                         * Creates a plain object from a SplitResult message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof factset.protobuf.stach.v3.Table.SplitResult
                         * @static
                         * @param {factset.protobuf.stach.v3.Table.SplitResult} message SplitResult
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        SplitResult.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults)
                                object.multiLevelHeadersTableReference = "";
                            if (message.multiLevelHeadersTableReference != null && message.hasOwnProperty("multiLevelHeadersTableReference"))
                                object.multiLevelHeadersTableReference = message.multiLevelHeadersTableReference;
                            return object;
                        };

                        /**
                         * Converts this SplitResult to JSON.
                         * @function toJSON
                         * @memberof factset.protobuf.stach.v3.Table.SplitResult
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        SplitResult.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        return SplitResult;
                    })();

                    return Table;
                })();

                v3.TableView = (function() {

                    /**
                     * Properties of a TableView.
                     * @memberof factset.protobuf.stach.v3
                     * @interface ITableView
                     * @property {string|null} [displayName] TableView displayName
                     * @property {Array.<string>|null} [columns] TableView columns
                     * @property {Object.<string,string>|null} [headers] TableView headers
                     * @property {factset.protobuf.stach.v3.TableView.IGroup|null} [group] TableView group
                     * @property {factset.protobuf.stach.v3.TableView.ISplit|null} [split] TableView split
                     * @property {Object.<string,factset.protobuf.stach.v3.IMetadataItem>|null} [customMetadata] TableView customMetadata
                     */

                    /**
                     * Constructs a new TableView.
                     * @memberof factset.protobuf.stach.v3
                     * @classdesc Represents a TableView.
                     * @implements ITableView
                     * @constructor
                     * @param {factset.protobuf.stach.v3.ITableView=} [properties] Properties to set
                     */
                    function TableView(properties) {
                        this.columns = [];
                        this.headers = {};
                        this.customMetadata = {};
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * TableView displayName.
                     * @member {string} displayName
                     * @memberof factset.protobuf.stach.v3.TableView
                     * @instance
                     */
                    TableView.prototype.displayName = "";

                    /**
                     * TableView columns.
                     * @member {Array.<string>} columns
                     * @memberof factset.protobuf.stach.v3.TableView
                     * @instance
                     */
                    TableView.prototype.columns = $util.emptyArray;

                    /**
                     * TableView headers.
                     * @member {Object.<string,string>} headers
                     * @memberof factset.protobuf.stach.v3.TableView
                     * @instance
                     */
                    TableView.prototype.headers = $util.emptyObject;

                    /**
                     * TableView group.
                     * @member {factset.protobuf.stach.v3.TableView.IGroup|null|undefined} group
                     * @memberof factset.protobuf.stach.v3.TableView
                     * @instance
                     */
                    TableView.prototype.group = null;

                    /**
                     * TableView split.
                     * @member {factset.protobuf.stach.v3.TableView.ISplit|null|undefined} split
                     * @memberof factset.protobuf.stach.v3.TableView
                     * @instance
                     */
                    TableView.prototype.split = null;

                    /**
                     * TableView customMetadata.
                     * @member {Object.<string,factset.protobuf.stach.v3.IMetadataItem>} customMetadata
                     * @memberof factset.protobuf.stach.v3.TableView
                     * @instance
                     */
                    TableView.prototype.customMetadata = $util.emptyObject;

                    /**
                     * Creates a new TableView instance using the specified properties.
                     * @function create
                     * @memberof factset.protobuf.stach.v3.TableView
                     * @static
                     * @param {factset.protobuf.stach.v3.ITableView=} [properties] Properties to set
                     * @returns {factset.protobuf.stach.v3.TableView} TableView instance
                     */
                    TableView.create = function create(properties) {
                        return new TableView(properties);
                    };

                    /**
                     * Encodes the specified TableView message. Does not implicitly {@link factset.protobuf.stach.v3.TableView.verify|verify} messages.
                     * @function encode
                     * @memberof factset.protobuf.stach.v3.TableView
                     * @static
                     * @param {factset.protobuf.stach.v3.ITableView} message TableView message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    TableView.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.displayName != null && Object.hasOwnProperty.call(message, "displayName"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.displayName);
                        if (message.columns != null && message.columns.length)
                            for (var i = 0; i < message.columns.length; ++i)
                                writer.uint32(/* id 2, wireType 2 =*/18).string(message.columns[i]);
                        if (message.headers != null && Object.hasOwnProperty.call(message, "headers"))
                            for (var keys = Object.keys(message.headers), i = 0; i < keys.length; ++i)
                                writer.uint32(/* id 3, wireType 2 =*/26).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.headers[keys[i]]).ldelim();
                        if (message.group != null && Object.hasOwnProperty.call(message, "group"))
                            $root.factset.protobuf.stach.v3.TableView.Group.encode(message.group, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                        if (message.split != null && Object.hasOwnProperty.call(message, "split"))
                            $root.factset.protobuf.stach.v3.TableView.Split.encode(message.split, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                        if (message.customMetadata != null && Object.hasOwnProperty.call(message, "customMetadata"))
                            for (var keys = Object.keys(message.customMetadata), i = 0; i < keys.length; ++i) {
                                writer.uint32(/* id 100, wireType 2 =*/802).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                                $root.factset.protobuf.stach.v3.MetadataItem.encode(message.customMetadata[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                            }
                        return writer;
                    };

                    /**
                     * Encodes the specified TableView message, length delimited. Does not implicitly {@link factset.protobuf.stach.v3.TableView.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof factset.protobuf.stach.v3.TableView
                     * @static
                     * @param {factset.protobuf.stach.v3.ITableView} message TableView message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    TableView.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a TableView message from the specified reader or buffer.
                     * @function decode
                     * @memberof factset.protobuf.stach.v3.TableView
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {factset.protobuf.stach.v3.TableView} TableView
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    TableView.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.factset.protobuf.stach.v3.TableView(), key, value;
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.displayName = reader.string();
                                break;
                            case 2:
                                if (!(message.columns && message.columns.length))
                                    message.columns = [];
                                message.columns.push(reader.string());
                                break;
                            case 3:
                                if (message.headers === $util.emptyObject)
                                    message.headers = {};
                                var end2 = reader.uint32() + reader.pos;
                                key = "";
                                value = "";
                                while (reader.pos < end2) {
                                    var tag2 = reader.uint32();
                                    switch (tag2 >>> 3) {
                                    case 1:
                                        key = reader.string();
                                        break;
                                    case 2:
                                        value = reader.string();
                                        break;
                                    default:
                                        reader.skipType(tag2 & 7);
                                        break;
                                    }
                                }
                                message.headers[key] = value;
                                break;
                            case 4:
                                message.group = $root.factset.protobuf.stach.v3.TableView.Group.decode(reader, reader.uint32());
                                break;
                            case 5:
                                message.split = $root.factset.protobuf.stach.v3.TableView.Split.decode(reader, reader.uint32());
                                break;
                            case 100:
                                if (message.customMetadata === $util.emptyObject)
                                    message.customMetadata = {};
                                var end2 = reader.uint32() + reader.pos;
                                key = "";
                                value = null;
                                while (reader.pos < end2) {
                                    var tag2 = reader.uint32();
                                    switch (tag2 >>> 3) {
                                    case 1:
                                        key = reader.string();
                                        break;
                                    case 2:
                                        value = $root.factset.protobuf.stach.v3.MetadataItem.decode(reader, reader.uint32());
                                        break;
                                    default:
                                        reader.skipType(tag2 & 7);
                                        break;
                                    }
                                }
                                message.customMetadata[key] = value;
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a TableView message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof factset.protobuf.stach.v3.TableView
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {factset.protobuf.stach.v3.TableView} TableView
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    TableView.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a TableView message.
                     * @function verify
                     * @memberof factset.protobuf.stach.v3.TableView
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    TableView.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.displayName != null && message.hasOwnProperty("displayName"))
                            if (!$util.isString(message.displayName))
                                return "displayName: string expected";
                        if (message.columns != null && message.hasOwnProperty("columns")) {
                            if (!Array.isArray(message.columns))
                                return "columns: array expected";
                            for (var i = 0; i < message.columns.length; ++i)
                                if (!$util.isString(message.columns[i]))
                                    return "columns: string[] expected";
                        }
                        if (message.headers != null && message.hasOwnProperty("headers")) {
                            if (!$util.isObject(message.headers))
                                return "headers: object expected";
                            var key = Object.keys(message.headers);
                            for (var i = 0; i < key.length; ++i)
                                if (!$util.isString(message.headers[key[i]]))
                                    return "headers: string{k:string} expected";
                        }
                        if (message.group != null && message.hasOwnProperty("group")) {
                            var error = $root.factset.protobuf.stach.v3.TableView.Group.verify(message.group);
                            if (error)
                                return "group." + error;
                        }
                        if (message.split != null && message.hasOwnProperty("split")) {
                            var error = $root.factset.protobuf.stach.v3.TableView.Split.verify(message.split);
                            if (error)
                                return "split." + error;
                        }
                        if (message.customMetadata != null && message.hasOwnProperty("customMetadata")) {
                            if (!$util.isObject(message.customMetadata))
                                return "customMetadata: object expected";
                            var key = Object.keys(message.customMetadata);
                            for (var i = 0; i < key.length; ++i) {
                                var error = $root.factset.protobuf.stach.v3.MetadataItem.verify(message.customMetadata[key[i]]);
                                if (error)
                                    return "customMetadata." + error;
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates a TableView message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof factset.protobuf.stach.v3.TableView
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {factset.protobuf.stach.v3.TableView} TableView
                     */
                    TableView.fromObject = function fromObject(object) {
                        if (object instanceof $root.factset.protobuf.stach.v3.TableView)
                            return object;
                        var message = new $root.factset.protobuf.stach.v3.TableView();
                        if (object.displayName != null)
                            message.displayName = String(object.displayName);
                        if (object.columns) {
                            if (!Array.isArray(object.columns))
                                throw TypeError(".factset.protobuf.stach.v3.TableView.columns: array expected");
                            message.columns = [];
                            for (var i = 0; i < object.columns.length; ++i)
                                message.columns[i] = String(object.columns[i]);
                        }
                        if (object.headers) {
                            if (typeof object.headers !== "object")
                                throw TypeError(".factset.protobuf.stach.v3.TableView.headers: object expected");
                            message.headers = {};
                            for (var keys = Object.keys(object.headers), i = 0; i < keys.length; ++i)
                                message.headers[keys[i]] = String(object.headers[keys[i]]);
                        }
                        if (object.group != null) {
                            if (typeof object.group !== "object")
                                throw TypeError(".factset.protobuf.stach.v3.TableView.group: object expected");
                            message.group = $root.factset.protobuf.stach.v3.TableView.Group.fromObject(object.group);
                        }
                        if (object.split != null) {
                            if (typeof object.split !== "object")
                                throw TypeError(".factset.protobuf.stach.v3.TableView.split: object expected");
                            message.split = $root.factset.protobuf.stach.v3.TableView.Split.fromObject(object.split);
                        }
                        if (object.customMetadata) {
                            if (typeof object.customMetadata !== "object")
                                throw TypeError(".factset.protobuf.stach.v3.TableView.customMetadata: object expected");
                            message.customMetadata = {};
                            for (var keys = Object.keys(object.customMetadata), i = 0; i < keys.length; ++i) {
                                if (typeof object.customMetadata[keys[i]] !== "object")
                                    throw TypeError(".factset.protobuf.stach.v3.TableView.customMetadata: object expected");
                                message.customMetadata[keys[i]] = $root.factset.protobuf.stach.v3.MetadataItem.fromObject(object.customMetadata[keys[i]]);
                            }
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a TableView message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof factset.protobuf.stach.v3.TableView
                     * @static
                     * @param {factset.protobuf.stach.v3.TableView} message TableView
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    TableView.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.columns = [];
                        if (options.objects || options.defaults) {
                            object.headers = {};
                            object.customMetadata = {};
                        }
                        if (options.defaults) {
                            object.displayName = "";
                            object.group = null;
                            object.split = null;
                        }
                        if (message.displayName != null && message.hasOwnProperty("displayName"))
                            object.displayName = message.displayName;
                        if (message.columns && message.columns.length) {
                            object.columns = [];
                            for (var j = 0; j < message.columns.length; ++j)
                                object.columns[j] = message.columns[j];
                        }
                        var keys2;
                        if (message.headers && (keys2 = Object.keys(message.headers)).length) {
                            object.headers = {};
                            for (var j = 0; j < keys2.length; ++j)
                                object.headers[keys2[j]] = message.headers[keys2[j]];
                        }
                        if (message.group != null && message.hasOwnProperty("group"))
                            object.group = $root.factset.protobuf.stach.v3.TableView.Group.toObject(message.group, options);
                        if (message.split != null && message.hasOwnProperty("split"))
                            object.split = $root.factset.protobuf.stach.v3.TableView.Split.toObject(message.split, options);
                        if (message.customMetadata && (keys2 = Object.keys(message.customMetadata)).length) {
                            object.customMetadata = {};
                            for (var j = 0; j < keys2.length; ++j)
                                object.customMetadata[keys2[j]] = $root.factset.protobuf.stach.v3.MetadataItem.toObject(message.customMetadata[keys2[j]], options);
                        }
                        return object;
                    };

                    /**
                     * Converts this TableView to JSON.
                     * @function toJSON
                     * @memberof factset.protobuf.stach.v3.TableView
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    TableView.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    TableView.Group = (function() {

                        /**
                         * Properties of a Group.
                         * @memberof factset.protobuf.stach.v3.TableView
                         * @interface IGroup
                         * @property {Array.<string>|null} [by] Group by
                         * @property {factset.protobuf.stach.v3.TableView.ICollapsedColumn|null} [collapsedColumn] Group collapsedColumn
                         */

                        /**
                         * Constructs a new Group.
                         * @memberof factset.protobuf.stach.v3.TableView
                         * @classdesc Represents a Group.
                         * @implements IGroup
                         * @constructor
                         * @param {factset.protobuf.stach.v3.TableView.IGroup=} [properties] Properties to set
                         */
                        function Group(properties) {
                            this.by = [];
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * Group by.
                         * @member {Array.<string>} by
                         * @memberof factset.protobuf.stach.v3.TableView.Group
                         * @instance
                         */
                        Group.prototype.by = $util.emptyArray;

                        /**
                         * Group collapsedColumn.
                         * @member {factset.protobuf.stach.v3.TableView.ICollapsedColumn|null|undefined} collapsedColumn
                         * @memberof factset.protobuf.stach.v3.TableView.Group
                         * @instance
                         */
                        Group.prototype.collapsedColumn = null;

                        /**
                         * Creates a new Group instance using the specified properties.
                         * @function create
                         * @memberof factset.protobuf.stach.v3.TableView.Group
                         * @static
                         * @param {factset.protobuf.stach.v3.TableView.IGroup=} [properties] Properties to set
                         * @returns {factset.protobuf.stach.v3.TableView.Group} Group instance
                         */
                        Group.create = function create(properties) {
                            return new Group(properties);
                        };

                        /**
                         * Encodes the specified Group message. Does not implicitly {@link factset.protobuf.stach.v3.TableView.Group.verify|verify} messages.
                         * @function encode
                         * @memberof factset.protobuf.stach.v3.TableView.Group
                         * @static
                         * @param {factset.protobuf.stach.v3.TableView.IGroup} message Group message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Group.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.by != null && message.by.length)
                                for (var i = 0; i < message.by.length; ++i)
                                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.by[i]);
                            if (message.collapsedColumn != null && Object.hasOwnProperty.call(message, "collapsedColumn"))
                                $root.factset.protobuf.stach.v3.TableView.CollapsedColumn.encode(message.collapsedColumn, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                            return writer;
                        };

                        /**
                         * Encodes the specified Group message, length delimited. Does not implicitly {@link factset.protobuf.stach.v3.TableView.Group.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof factset.protobuf.stach.v3.TableView.Group
                         * @static
                         * @param {factset.protobuf.stach.v3.TableView.IGroup} message Group message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Group.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes a Group message from the specified reader or buffer.
                         * @function decode
                         * @memberof factset.protobuf.stach.v3.TableView.Group
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {factset.protobuf.stach.v3.TableView.Group} Group
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Group.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.factset.protobuf.stach.v3.TableView.Group();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    if (!(message.by && message.by.length))
                                        message.by = [];
                                    message.by.push(reader.string());
                                    break;
                                case 2:
                                    message.collapsedColumn = $root.factset.protobuf.stach.v3.TableView.CollapsedColumn.decode(reader, reader.uint32());
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes a Group message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof factset.protobuf.stach.v3.TableView.Group
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {factset.protobuf.stach.v3.TableView.Group} Group
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Group.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies a Group message.
                         * @function verify
                         * @memberof factset.protobuf.stach.v3.TableView.Group
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        Group.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.by != null && message.hasOwnProperty("by")) {
                                if (!Array.isArray(message.by))
                                    return "by: array expected";
                                for (var i = 0; i < message.by.length; ++i)
                                    if (!$util.isString(message.by[i]))
                                        return "by: string[] expected";
                            }
                            if (message.collapsedColumn != null && message.hasOwnProperty("collapsedColumn")) {
                                var error = $root.factset.protobuf.stach.v3.TableView.CollapsedColumn.verify(message.collapsedColumn);
                                if (error)
                                    return "collapsedColumn." + error;
                            }
                            return null;
                        };

                        /**
                         * Creates a Group message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof factset.protobuf.stach.v3.TableView.Group
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {factset.protobuf.stach.v3.TableView.Group} Group
                         */
                        Group.fromObject = function fromObject(object) {
                            if (object instanceof $root.factset.protobuf.stach.v3.TableView.Group)
                                return object;
                            var message = new $root.factset.protobuf.stach.v3.TableView.Group();
                            if (object.by) {
                                if (!Array.isArray(object.by))
                                    throw TypeError(".factset.protobuf.stach.v3.TableView.Group.by: array expected");
                                message.by = [];
                                for (var i = 0; i < object.by.length; ++i)
                                    message.by[i] = String(object.by[i]);
                            }
                            if (object.collapsedColumn != null) {
                                if (typeof object.collapsedColumn !== "object")
                                    throw TypeError(".factset.protobuf.stach.v3.TableView.Group.collapsedColumn: object expected");
                                message.collapsedColumn = $root.factset.protobuf.stach.v3.TableView.CollapsedColumn.fromObject(object.collapsedColumn);
                            }
                            return message;
                        };

                        /**
                         * Creates a plain object from a Group message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof factset.protobuf.stach.v3.TableView.Group
                         * @static
                         * @param {factset.protobuf.stach.v3.TableView.Group} message Group
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        Group.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.arrays || options.defaults)
                                object.by = [];
                            if (options.defaults)
                                object.collapsedColumn = null;
                            if (message.by && message.by.length) {
                                object.by = [];
                                for (var j = 0; j < message.by.length; ++j)
                                    object.by[j] = message.by[j];
                            }
                            if (message.collapsedColumn != null && message.hasOwnProperty("collapsedColumn"))
                                object.collapsedColumn = $root.factset.protobuf.stach.v3.TableView.CollapsedColumn.toObject(message.collapsedColumn, options);
                            return object;
                        };

                        /**
                         * Converts this Group to JSON.
                         * @function toJSON
                         * @memberof factset.protobuf.stach.v3.TableView.Group
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        Group.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        return Group;
                    })();

                    TableView.CollapsedColumn = (function() {

                        /**
                         * Properties of a CollapsedColumn.
                         * @memberof factset.protobuf.stach.v3.TableView
                         * @interface ICollapsedColumn
                         * @property {string|null} [alias] CollapsedColumn alias
                         */

                        /**
                         * Constructs a new CollapsedColumn.
                         * @memberof factset.protobuf.stach.v3.TableView
                         * @classdesc Represents a CollapsedColumn.
                         * @implements ICollapsedColumn
                         * @constructor
                         * @param {factset.protobuf.stach.v3.TableView.ICollapsedColumn=} [properties] Properties to set
                         */
                        function CollapsedColumn(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * CollapsedColumn alias.
                         * @member {string} alias
                         * @memberof factset.protobuf.stach.v3.TableView.CollapsedColumn
                         * @instance
                         */
                        CollapsedColumn.prototype.alias = "";

                        /**
                         * Creates a new CollapsedColumn instance using the specified properties.
                         * @function create
                         * @memberof factset.protobuf.stach.v3.TableView.CollapsedColumn
                         * @static
                         * @param {factset.protobuf.stach.v3.TableView.ICollapsedColumn=} [properties] Properties to set
                         * @returns {factset.protobuf.stach.v3.TableView.CollapsedColumn} CollapsedColumn instance
                         */
                        CollapsedColumn.create = function create(properties) {
                            return new CollapsedColumn(properties);
                        };

                        /**
                         * Encodes the specified CollapsedColumn message. Does not implicitly {@link factset.protobuf.stach.v3.TableView.CollapsedColumn.verify|verify} messages.
                         * @function encode
                         * @memberof factset.protobuf.stach.v3.TableView.CollapsedColumn
                         * @static
                         * @param {factset.protobuf.stach.v3.TableView.ICollapsedColumn} message CollapsedColumn message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        CollapsedColumn.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.alias != null && Object.hasOwnProperty.call(message, "alias"))
                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.alias);
                            return writer;
                        };

                        /**
                         * Encodes the specified CollapsedColumn message, length delimited. Does not implicitly {@link factset.protobuf.stach.v3.TableView.CollapsedColumn.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof factset.protobuf.stach.v3.TableView.CollapsedColumn
                         * @static
                         * @param {factset.protobuf.stach.v3.TableView.ICollapsedColumn} message CollapsedColumn message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        CollapsedColumn.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes a CollapsedColumn message from the specified reader or buffer.
                         * @function decode
                         * @memberof factset.protobuf.stach.v3.TableView.CollapsedColumn
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {factset.protobuf.stach.v3.TableView.CollapsedColumn} CollapsedColumn
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        CollapsedColumn.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.factset.protobuf.stach.v3.TableView.CollapsedColumn();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.alias = reader.string();
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes a CollapsedColumn message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof factset.protobuf.stach.v3.TableView.CollapsedColumn
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {factset.protobuf.stach.v3.TableView.CollapsedColumn} CollapsedColumn
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        CollapsedColumn.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies a CollapsedColumn message.
                         * @function verify
                         * @memberof factset.protobuf.stach.v3.TableView.CollapsedColumn
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        CollapsedColumn.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.alias != null && message.hasOwnProperty("alias"))
                                if (!$util.isString(message.alias))
                                    return "alias: string expected";
                            return null;
                        };

                        /**
                         * Creates a CollapsedColumn message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof factset.protobuf.stach.v3.TableView.CollapsedColumn
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {factset.protobuf.stach.v3.TableView.CollapsedColumn} CollapsedColumn
                         */
                        CollapsedColumn.fromObject = function fromObject(object) {
                            if (object instanceof $root.factset.protobuf.stach.v3.TableView.CollapsedColumn)
                                return object;
                            var message = new $root.factset.protobuf.stach.v3.TableView.CollapsedColumn();
                            if (object.alias != null)
                                message.alias = String(object.alias);
                            return message;
                        };

                        /**
                         * Creates a plain object from a CollapsedColumn message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof factset.protobuf.stach.v3.TableView.CollapsedColumn
                         * @static
                         * @param {factset.protobuf.stach.v3.TableView.CollapsedColumn} message CollapsedColumn
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        CollapsedColumn.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults)
                                object.alias = "";
                            if (message.alias != null && message.hasOwnProperty("alias"))
                                object.alias = message.alias;
                            return object;
                        };

                        /**
                         * Converts this CollapsedColumn to JSON.
                         * @function toJSON
                         * @memberof factset.protobuf.stach.v3.TableView.CollapsedColumn
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        CollapsedColumn.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        return CollapsedColumn;
                    })();

                    TableView.Split = (function() {

                        /**
                         * Properties of a Split.
                         * @memberof factset.protobuf.stach.v3.TableView
                         * @interface ISplit
                         * @property {string|null} [alias] Split alias
                         * @property {Array.<string>|null} [by] Split by
                         * @property {Array.<string>|null} [include] Split include
                         * @property {Array.<string>|null} [over] Split over
                         * @property {Object.<string,string>|null} [headers] Split headers
                         * @property {boolean|null} [removeEmptySplitColumns] Split removeEmptySplitColumns
                         */

                        /**
                         * Constructs a new Split.
                         * @memberof factset.protobuf.stach.v3.TableView
                         * @classdesc Represents a Split.
                         * @implements ISplit
                         * @constructor
                         * @param {factset.protobuf.stach.v3.TableView.ISplit=} [properties] Properties to set
                         */
                        function Split(properties) {
                            this.by = [];
                            this.include = [];
                            this.over = [];
                            this.headers = {};
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * Split alias.
                         * @member {string} alias
                         * @memberof factset.protobuf.stach.v3.TableView.Split
                         * @instance
                         */
                        Split.prototype.alias = "";

                        /**
                         * Split by.
                         * @member {Array.<string>} by
                         * @memberof factset.protobuf.stach.v3.TableView.Split
                         * @instance
                         */
                        Split.prototype.by = $util.emptyArray;

                        /**
                         * Split include.
                         * @member {Array.<string>} include
                         * @memberof factset.protobuf.stach.v3.TableView.Split
                         * @instance
                         */
                        Split.prototype.include = $util.emptyArray;

                        /**
                         * Split over.
                         * @member {Array.<string>} over
                         * @memberof factset.protobuf.stach.v3.TableView.Split
                         * @instance
                         */
                        Split.prototype.over = $util.emptyArray;

                        /**
                         * Split headers.
                         * @member {Object.<string,string>} headers
                         * @memberof factset.protobuf.stach.v3.TableView.Split
                         * @instance
                         */
                        Split.prototype.headers = $util.emptyObject;

                        /**
                         * Split removeEmptySplitColumns.
                         * @member {boolean} removeEmptySplitColumns
                         * @memberof factset.protobuf.stach.v3.TableView.Split
                         * @instance
                         */
                        Split.prototype.removeEmptySplitColumns = false;

                        /**
                         * Creates a new Split instance using the specified properties.
                         * @function create
                         * @memberof factset.protobuf.stach.v3.TableView.Split
                         * @static
                         * @param {factset.protobuf.stach.v3.TableView.ISplit=} [properties] Properties to set
                         * @returns {factset.protobuf.stach.v3.TableView.Split} Split instance
                         */
                        Split.create = function create(properties) {
                            return new Split(properties);
                        };

                        /**
                         * Encodes the specified Split message. Does not implicitly {@link factset.protobuf.stach.v3.TableView.Split.verify|verify} messages.
                         * @function encode
                         * @memberof factset.protobuf.stach.v3.TableView.Split
                         * @static
                         * @param {factset.protobuf.stach.v3.TableView.ISplit} message Split message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Split.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.alias != null && Object.hasOwnProperty.call(message, "alias"))
                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.alias);
                            if (message.by != null && message.by.length)
                                for (var i = 0; i < message.by.length; ++i)
                                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.by[i]);
                            if (message.include != null && message.include.length)
                                for (var i = 0; i < message.include.length; ++i)
                                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.include[i]);
                            if (message.over != null && message.over.length)
                                for (var i = 0; i < message.over.length; ++i)
                                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.over[i]);
                            if (message.headers != null && Object.hasOwnProperty.call(message, "headers"))
                                for (var keys = Object.keys(message.headers), i = 0; i < keys.length; ++i)
                                    writer.uint32(/* id 5, wireType 2 =*/42).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.headers[keys[i]]).ldelim();
                            if (message.removeEmptySplitColumns != null && Object.hasOwnProperty.call(message, "removeEmptySplitColumns"))
                                writer.uint32(/* id 6, wireType 0 =*/48).bool(message.removeEmptySplitColumns);
                            return writer;
                        };

                        /**
                         * Encodes the specified Split message, length delimited. Does not implicitly {@link factset.protobuf.stach.v3.TableView.Split.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof factset.protobuf.stach.v3.TableView.Split
                         * @static
                         * @param {factset.protobuf.stach.v3.TableView.ISplit} message Split message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Split.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes a Split message from the specified reader or buffer.
                         * @function decode
                         * @memberof factset.protobuf.stach.v3.TableView.Split
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {factset.protobuf.stach.v3.TableView.Split} Split
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Split.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.factset.protobuf.stach.v3.TableView.Split(), key, value;
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.alias = reader.string();
                                    break;
                                case 2:
                                    if (!(message.by && message.by.length))
                                        message.by = [];
                                    message.by.push(reader.string());
                                    break;
                                case 3:
                                    if (!(message.include && message.include.length))
                                        message.include = [];
                                    message.include.push(reader.string());
                                    break;
                                case 4:
                                    if (!(message.over && message.over.length))
                                        message.over = [];
                                    message.over.push(reader.string());
                                    break;
                                case 5:
                                    if (message.headers === $util.emptyObject)
                                        message.headers = {};
                                    var end2 = reader.uint32() + reader.pos;
                                    key = "";
                                    value = "";
                                    while (reader.pos < end2) {
                                        var tag2 = reader.uint32();
                                        switch (tag2 >>> 3) {
                                        case 1:
                                            key = reader.string();
                                            break;
                                        case 2:
                                            value = reader.string();
                                            break;
                                        default:
                                            reader.skipType(tag2 & 7);
                                            break;
                                        }
                                    }
                                    message.headers[key] = value;
                                    break;
                                case 6:
                                    message.removeEmptySplitColumns = reader.bool();
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes a Split message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof factset.protobuf.stach.v3.TableView.Split
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {factset.protobuf.stach.v3.TableView.Split} Split
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Split.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies a Split message.
                         * @function verify
                         * @memberof factset.protobuf.stach.v3.TableView.Split
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        Split.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.alias != null && message.hasOwnProperty("alias"))
                                if (!$util.isString(message.alias))
                                    return "alias: string expected";
                            if (message.by != null && message.hasOwnProperty("by")) {
                                if (!Array.isArray(message.by))
                                    return "by: array expected";
                                for (var i = 0; i < message.by.length; ++i)
                                    if (!$util.isString(message.by[i]))
                                        return "by: string[] expected";
                            }
                            if (message.include != null && message.hasOwnProperty("include")) {
                                if (!Array.isArray(message.include))
                                    return "include: array expected";
                                for (var i = 0; i < message.include.length; ++i)
                                    if (!$util.isString(message.include[i]))
                                        return "include: string[] expected";
                            }
                            if (message.over != null && message.hasOwnProperty("over")) {
                                if (!Array.isArray(message.over))
                                    return "over: array expected";
                                for (var i = 0; i < message.over.length; ++i)
                                    if (!$util.isString(message.over[i]))
                                        return "over: string[] expected";
                            }
                            if (message.headers != null && message.hasOwnProperty("headers")) {
                                if (!$util.isObject(message.headers))
                                    return "headers: object expected";
                                var key = Object.keys(message.headers);
                                for (var i = 0; i < key.length; ++i)
                                    if (!$util.isString(message.headers[key[i]]))
                                        return "headers: string{k:string} expected";
                            }
                            if (message.removeEmptySplitColumns != null && message.hasOwnProperty("removeEmptySplitColumns"))
                                if (typeof message.removeEmptySplitColumns !== "boolean")
                                    return "removeEmptySplitColumns: boolean expected";
                            return null;
                        };

                        /**
                         * Creates a Split message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof factset.protobuf.stach.v3.TableView.Split
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {factset.protobuf.stach.v3.TableView.Split} Split
                         */
                        Split.fromObject = function fromObject(object) {
                            if (object instanceof $root.factset.protobuf.stach.v3.TableView.Split)
                                return object;
                            var message = new $root.factset.protobuf.stach.v3.TableView.Split();
                            if (object.alias != null)
                                message.alias = String(object.alias);
                            if (object.by) {
                                if (!Array.isArray(object.by))
                                    throw TypeError(".factset.protobuf.stach.v3.TableView.Split.by: array expected");
                                message.by = [];
                                for (var i = 0; i < object.by.length; ++i)
                                    message.by[i] = String(object.by[i]);
                            }
                            if (object.include) {
                                if (!Array.isArray(object.include))
                                    throw TypeError(".factset.protobuf.stach.v3.TableView.Split.include: array expected");
                                message.include = [];
                                for (var i = 0; i < object.include.length; ++i)
                                    message.include[i] = String(object.include[i]);
                            }
                            if (object.over) {
                                if (!Array.isArray(object.over))
                                    throw TypeError(".factset.protobuf.stach.v3.TableView.Split.over: array expected");
                                message.over = [];
                                for (var i = 0; i < object.over.length; ++i)
                                    message.over[i] = String(object.over[i]);
                            }
                            if (object.headers) {
                                if (typeof object.headers !== "object")
                                    throw TypeError(".factset.protobuf.stach.v3.TableView.Split.headers: object expected");
                                message.headers = {};
                                for (var keys = Object.keys(object.headers), i = 0; i < keys.length; ++i)
                                    message.headers[keys[i]] = String(object.headers[keys[i]]);
                            }
                            if (object.removeEmptySplitColumns != null)
                                message.removeEmptySplitColumns = Boolean(object.removeEmptySplitColumns);
                            return message;
                        };

                        /**
                         * Creates a plain object from a Split message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof factset.protobuf.stach.v3.TableView.Split
                         * @static
                         * @param {factset.protobuf.stach.v3.TableView.Split} message Split
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        Split.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.arrays || options.defaults) {
                                object.by = [];
                                object.include = [];
                                object.over = [];
                            }
                            if (options.objects || options.defaults)
                                object.headers = {};
                            if (options.defaults) {
                                object.alias = "";
                                object.removeEmptySplitColumns = false;
                            }
                            if (message.alias != null && message.hasOwnProperty("alias"))
                                object.alias = message.alias;
                            if (message.by && message.by.length) {
                                object.by = [];
                                for (var j = 0; j < message.by.length; ++j)
                                    object.by[j] = message.by[j];
                            }
                            if (message.include && message.include.length) {
                                object.include = [];
                                for (var j = 0; j < message.include.length; ++j)
                                    object.include[j] = message.include[j];
                            }
                            if (message.over && message.over.length) {
                                object.over = [];
                                for (var j = 0; j < message.over.length; ++j)
                                    object.over[j] = message.over[j];
                            }
                            var keys2;
                            if (message.headers && (keys2 = Object.keys(message.headers)).length) {
                                object.headers = {};
                                for (var j = 0; j < keys2.length; ++j)
                                    object.headers[keys2[j]] = message.headers[keys2[j]];
                            }
                            if (message.removeEmptySplitColumns != null && message.hasOwnProperty("removeEmptySplitColumns"))
                                object.removeEmptySplitColumns = message.removeEmptySplitColumns;
                            return object;
                        };

                        /**
                         * Converts this Split to JSON.
                         * @function toJSON
                         * @memberof factset.protobuf.stach.v3.TableView.Split
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        Split.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        return Split;
                    })();

                    return TableView;
                })();

                v3.Views = (function() {

                    /**
                     * Properties of a Views.
                     * @memberof factset.protobuf.stach.v3
                     * @interface IViews
                     * @property {Array.<factset.protobuf.stach.v3.Views.IView>|null} [views] Views views
                     */

                    /**
                     * Constructs a new Views.
                     * @memberof factset.protobuf.stach.v3
                     * @classdesc Represents a Views.
                     * @implements IViews
                     * @constructor
                     * @param {factset.protobuf.stach.v3.IViews=} [properties] Properties to set
                     */
                    function Views(properties) {
                        this.views = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Views views.
                     * @member {Array.<factset.protobuf.stach.v3.Views.IView>} views
                     * @memberof factset.protobuf.stach.v3.Views
                     * @instance
                     */
                    Views.prototype.views = $util.emptyArray;

                    /**
                     * Creates a new Views instance using the specified properties.
                     * @function create
                     * @memberof factset.protobuf.stach.v3.Views
                     * @static
                     * @param {factset.protobuf.stach.v3.IViews=} [properties] Properties to set
                     * @returns {factset.protobuf.stach.v3.Views} Views instance
                     */
                    Views.create = function create(properties) {
                        return new Views(properties);
                    };

                    /**
                     * Encodes the specified Views message. Does not implicitly {@link factset.protobuf.stach.v3.Views.verify|verify} messages.
                     * @function encode
                     * @memberof factset.protobuf.stach.v3.Views
                     * @static
                     * @param {factset.protobuf.stach.v3.IViews} message Views message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Views.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.views != null && message.views.length)
                            for (var i = 0; i < message.views.length; ++i)
                                $root.factset.protobuf.stach.v3.Views.View.encode(message.views[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified Views message, length delimited. Does not implicitly {@link factset.protobuf.stach.v3.Views.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof factset.protobuf.stach.v3.Views
                     * @static
                     * @param {factset.protobuf.stach.v3.IViews} message Views message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Views.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a Views message from the specified reader or buffer.
                     * @function decode
                     * @memberof factset.protobuf.stach.v3.Views
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {factset.protobuf.stach.v3.Views} Views
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Views.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.factset.protobuf.stach.v3.Views();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                if (!(message.views && message.views.length))
                                    message.views = [];
                                message.views.push($root.factset.protobuf.stach.v3.Views.View.decode(reader, reader.uint32()));
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a Views message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof factset.protobuf.stach.v3.Views
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {factset.protobuf.stach.v3.Views} Views
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Views.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a Views message.
                     * @function verify
                     * @memberof factset.protobuf.stach.v3.Views
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Views.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.views != null && message.hasOwnProperty("views")) {
                            if (!Array.isArray(message.views))
                                return "views: array expected";
                            for (var i = 0; i < message.views.length; ++i) {
                                var error = $root.factset.protobuf.stach.v3.Views.View.verify(message.views[i]);
                                if (error)
                                    return "views." + error;
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates a Views message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof factset.protobuf.stach.v3.Views
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {factset.protobuf.stach.v3.Views} Views
                     */
                    Views.fromObject = function fromObject(object) {
                        if (object instanceof $root.factset.protobuf.stach.v3.Views)
                            return object;
                        var message = new $root.factset.protobuf.stach.v3.Views();
                        if (object.views) {
                            if (!Array.isArray(object.views))
                                throw TypeError(".factset.protobuf.stach.v3.Views.views: array expected");
                            message.views = [];
                            for (var i = 0; i < object.views.length; ++i) {
                                if (typeof object.views[i] !== "object")
                                    throw TypeError(".factset.protobuf.stach.v3.Views.views: object expected");
                                message.views[i] = $root.factset.protobuf.stach.v3.Views.View.fromObject(object.views[i]);
                            }
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a Views message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof factset.protobuf.stach.v3.Views
                     * @static
                     * @param {factset.protobuf.stach.v3.Views} message Views
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Views.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.views = [];
                        if (message.views && message.views.length) {
                            object.views = [];
                            for (var j = 0; j < message.views.length; ++j)
                                object.views[j] = $root.factset.protobuf.stach.v3.Views.View.toObject(message.views[j], options);
                        }
                        return object;
                    };

                    /**
                     * Converts this Views to JSON.
                     * @function toJSON
                     * @memberof factset.protobuf.stach.v3.Views
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Views.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    Views.View = (function() {

                        /**
                         * Properties of a View.
                         * @memberof factset.protobuf.stach.v3.Views
                         * @interface IView
                         * @property {string|null} [name] View name
                         * @property {string|null} [displayName] View displayName
                         * @property {factset.protobuf.stach.v3.ITableView|null} [table] View table
                         */

                        /**
                         * Constructs a new View.
                         * @memberof factset.protobuf.stach.v3.Views
                         * @classdesc Represents a View.
                         * @implements IView
                         * @constructor
                         * @param {factset.protobuf.stach.v3.Views.IView=} [properties] Properties to set
                         */
                        function View(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * View name.
                         * @member {string} name
                         * @memberof factset.protobuf.stach.v3.Views.View
                         * @instance
                         */
                        View.prototype.name = "";

                        /**
                         * View displayName.
                         * @member {string} displayName
                         * @memberof factset.protobuf.stach.v3.Views.View
                         * @instance
                         */
                        View.prototype.displayName = "";

                        /**
                         * View table.
                         * @member {factset.protobuf.stach.v3.ITableView|null|undefined} table
                         * @memberof factset.protobuf.stach.v3.Views.View
                         * @instance
                         */
                        View.prototype.table = null;

                        // OneOf field names bound to virtual getters and setters
                        var $oneOfFields;

                        /**
                         * View type.
                         * @member {"table"|undefined} type
                         * @memberof factset.protobuf.stach.v3.Views.View
                         * @instance
                         */
                        Object.defineProperty(View.prototype, "type", {
                            get: $util.oneOfGetter($oneOfFields = ["table"]),
                            set: $util.oneOfSetter($oneOfFields)
                        });

                        /**
                         * Creates a new View instance using the specified properties.
                         * @function create
                         * @memberof factset.protobuf.stach.v3.Views.View
                         * @static
                         * @param {factset.protobuf.stach.v3.Views.IView=} [properties] Properties to set
                         * @returns {factset.protobuf.stach.v3.Views.View} View instance
                         */
                        View.create = function create(properties) {
                            return new View(properties);
                        };

                        /**
                         * Encodes the specified View message. Does not implicitly {@link factset.protobuf.stach.v3.Views.View.verify|verify} messages.
                         * @function encode
                         * @memberof factset.protobuf.stach.v3.Views.View
                         * @static
                         * @param {factset.protobuf.stach.v3.Views.IView} message View message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        View.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                            if (message.displayName != null && Object.hasOwnProperty.call(message, "displayName"))
                                writer.uint32(/* id 2, wireType 2 =*/18).string(message.displayName);
                            if (message.table != null && Object.hasOwnProperty.call(message, "table"))
                                $root.factset.protobuf.stach.v3.TableView.encode(message.table, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                            return writer;
                        };

                        /**
                         * Encodes the specified View message, length delimited. Does not implicitly {@link factset.protobuf.stach.v3.Views.View.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof factset.protobuf.stach.v3.Views.View
                         * @static
                         * @param {factset.protobuf.stach.v3.Views.IView} message View message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        View.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes a View message from the specified reader or buffer.
                         * @function decode
                         * @memberof factset.protobuf.stach.v3.Views.View
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {factset.protobuf.stach.v3.Views.View} View
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        View.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.factset.protobuf.stach.v3.Views.View();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.name = reader.string();
                                    break;
                                case 2:
                                    message.displayName = reader.string();
                                    break;
                                case 3:
                                    message.table = $root.factset.protobuf.stach.v3.TableView.decode(reader, reader.uint32());
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes a View message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof factset.protobuf.stach.v3.Views.View
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {factset.protobuf.stach.v3.Views.View} View
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        View.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies a View message.
                         * @function verify
                         * @memberof factset.protobuf.stach.v3.Views.View
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        View.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            var properties = {};
                            if (message.name != null && message.hasOwnProperty("name"))
                                if (!$util.isString(message.name))
                                    return "name: string expected";
                            if (message.displayName != null && message.hasOwnProperty("displayName"))
                                if (!$util.isString(message.displayName))
                                    return "displayName: string expected";
                            if (message.table != null && message.hasOwnProperty("table")) {
                                properties.type = 1;
                                {
                                    var error = $root.factset.protobuf.stach.v3.TableView.verify(message.table);
                                    if (error)
                                        return "table." + error;
                                }
                            }
                            return null;
                        };

                        /**
                         * Creates a View message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof factset.protobuf.stach.v3.Views.View
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {factset.protobuf.stach.v3.Views.View} View
                         */
                        View.fromObject = function fromObject(object) {
                            if (object instanceof $root.factset.protobuf.stach.v3.Views.View)
                                return object;
                            var message = new $root.factset.protobuf.stach.v3.Views.View();
                            if (object.name != null)
                                message.name = String(object.name);
                            if (object.displayName != null)
                                message.displayName = String(object.displayName);
                            if (object.table != null) {
                                if (typeof object.table !== "object")
                                    throw TypeError(".factset.protobuf.stach.v3.Views.View.table: object expected");
                                message.table = $root.factset.protobuf.stach.v3.TableView.fromObject(object.table);
                            }
                            return message;
                        };

                        /**
                         * Creates a plain object from a View message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof factset.protobuf.stach.v3.Views.View
                         * @static
                         * @param {factset.protobuf.stach.v3.Views.View} message View
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        View.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults) {
                                object.name = "";
                                object.displayName = "";
                            }
                            if (message.name != null && message.hasOwnProperty("name"))
                                object.name = message.name;
                            if (message.displayName != null && message.hasOwnProperty("displayName"))
                                object.displayName = message.displayName;
                            if (message.table != null && message.hasOwnProperty("table")) {
                                object.table = $root.factset.protobuf.stach.v3.TableView.toObject(message.table, options);
                                if (options.oneofs)
                                    object.type = "table";
                            }
                            return object;
                        };

                        /**
                         * Converts this View to JSON.
                         * @function toJSON
                         * @memberof factset.protobuf.stach.v3.Views.View
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        View.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        return View;
                    })();

                    return Views;
                })();

                return v3;
            })();

            return stach;
        })();

        return protobuf;
    })();

    return factset;
})();

$root.google = (function() {

    /**
     * Namespace google.
     * @exports google
     * @namespace
     */
    var google = {};

    google.protobuf = (function() {

        /**
         * Namespace protobuf.
         * @memberof google
         * @namespace
         */
        var protobuf = {};

        protobuf.Struct = (function() {

            /**
             * Properties of a Struct.
             * @memberof google.protobuf
             * @interface IStruct
             * @property {Object.<string,google.protobuf.IValue>|null} [fields] Struct fields
             */

            /**
             * Constructs a new Struct.
             * @memberof google.protobuf
             * @classdesc Represents a Struct.
             * @implements IStruct
             * @constructor
             * @param {google.protobuf.IStruct=} [properties] Properties to set
             */
            function Struct(properties) {
                this.fields = {};
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Struct fields.
             * @member {Object.<string,google.protobuf.IValue>} fields
             * @memberof google.protobuf.Struct
             * @instance
             */
            Struct.prototype.fields = $util.emptyObject;

            /**
             * Creates a new Struct instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Struct
             * @static
             * @param {google.protobuf.IStruct=} [properties] Properties to set
             * @returns {google.protobuf.Struct} Struct instance
             */
            Struct.create = function create(properties) {
                return new Struct(properties);
            };

            /**
             * Encodes the specified Struct message. Does not implicitly {@link google.protobuf.Struct.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Struct
             * @static
             * @param {google.protobuf.IStruct} message Struct message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Struct.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.fields != null && Object.hasOwnProperty.call(message, "fields"))
                    for (var keys = Object.keys(message.fields), i = 0; i < keys.length; ++i) {
                        writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                        $root.google.protobuf.Value.encode(message.fields[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                    }
                return writer;
            };

            /**
             * Encodes the specified Struct message, length delimited. Does not implicitly {@link google.protobuf.Struct.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.Struct
             * @static
             * @param {google.protobuf.IStruct} message Struct message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Struct.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Struct message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Struct
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Struct} Struct
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Struct.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Struct(), key, value;
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (message.fields === $util.emptyObject)
                            message.fields = {};
                        var end2 = reader.uint32() + reader.pos;
                        key = "";
                        value = null;
                        while (reader.pos < end2) {
                            var tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.string();
                                break;
                            case 2:
                                value = $root.google.protobuf.Value.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.fields[key] = value;
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Struct message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.Struct
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Struct} Struct
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Struct.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Struct message.
             * @function verify
             * @memberof google.protobuf.Struct
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Struct.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.fields != null && message.hasOwnProperty("fields")) {
                    if (!$util.isObject(message.fields))
                        return "fields: object expected";
                    var key = Object.keys(message.fields);
                    for (var i = 0; i < key.length; ++i) {
                        var error = $root.google.protobuf.Value.verify(message.fields[key[i]]);
                        if (error)
                            return "fields." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a Struct message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Struct
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Struct} Struct
             */
            Struct.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Struct)
                    return object;
                var message = new $root.google.protobuf.Struct();
                if (object.fields) {
                    if (typeof object.fields !== "object")
                        throw TypeError(".google.protobuf.Struct.fields: object expected");
                    message.fields = {};
                    for (var keys = Object.keys(object.fields), i = 0; i < keys.length; ++i) {
                        message.fields[keys[i]] = $root.google.protobuf.Value.fromObject(object.fields[keys[i]]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a Struct message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Struct
             * @static
             * @param {google.protobuf.Struct} message Struct
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Struct.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.objects || options.defaults)
                    object.fields = {};
                var keys2;
                if (message.fields && (keys2 = Object.keys(message.fields)).length) {
                    object.fields = {};
                    for (var j = 0; j < keys2.length; ++j)
                        object.fields[keys2[j]] = $root.google.protobuf.Value.toObject(message.fields[keys2[j]], options);
                }
                return object;
            };

            /**
             * Converts this Struct to JSON.
             * @function toJSON
             * @memberof google.protobuf.Struct
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Struct.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Struct;
        })();

        protobuf.Value = (function() {

            /**
             * Properties of a Value.
             * @memberof google.protobuf
             * @interface IValue
             * @property {google.protobuf.NullValue|null} [nullValue] Value nullValue
             * @property {number|null} [numberValue] Value numberValue
             * @property {string|null} [stringValue] Value stringValue
             * @property {boolean|null} [boolValue] Value boolValue
             * @property {google.protobuf.IStruct|null} [structValue] Value structValue
             * @property {google.protobuf.IListValue|null} [listValue] Value listValue
             */

            /**
             * Constructs a new Value.
             * @memberof google.protobuf
             * @classdesc Represents a Value.
             * @implements IValue
             * @constructor
             * @param {google.protobuf.IValue=} [properties] Properties to set
             */
            function Value(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Value nullValue.
             * @member {google.protobuf.NullValue} nullValue
             * @memberof google.protobuf.Value
             * @instance
             */
            Value.prototype.nullValue = 0;

            /**
             * Value numberValue.
             * @member {number} numberValue
             * @memberof google.protobuf.Value
             * @instance
             */
            Value.prototype.numberValue = 0;

            /**
             * Value stringValue.
             * @member {string} stringValue
             * @memberof google.protobuf.Value
             * @instance
             */
            Value.prototype.stringValue = "";

            /**
             * Value boolValue.
             * @member {boolean} boolValue
             * @memberof google.protobuf.Value
             * @instance
             */
            Value.prototype.boolValue = false;

            /**
             * Value structValue.
             * @member {google.protobuf.IStruct|null|undefined} structValue
             * @memberof google.protobuf.Value
             * @instance
             */
            Value.prototype.structValue = null;

            /**
             * Value listValue.
             * @member {google.protobuf.IListValue|null|undefined} listValue
             * @memberof google.protobuf.Value
             * @instance
             */
            Value.prototype.listValue = null;

            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;

            /**
             * Value kind.
             * @member {"nullValue"|"numberValue"|"stringValue"|"boolValue"|"structValue"|"listValue"|undefined} kind
             * @memberof google.protobuf.Value
             * @instance
             */
            Object.defineProperty(Value.prototype, "kind", {
                get: $util.oneOfGetter($oneOfFields = ["nullValue", "numberValue", "stringValue", "boolValue", "structValue", "listValue"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new Value instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Value
             * @static
             * @param {google.protobuf.IValue=} [properties] Properties to set
             * @returns {google.protobuf.Value} Value instance
             */
            Value.create = function create(properties) {
                return new Value(properties);
            };

            /**
             * Encodes the specified Value message. Does not implicitly {@link google.protobuf.Value.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Value
             * @static
             * @param {google.protobuf.IValue} message Value message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Value.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.nullValue != null && Object.hasOwnProperty.call(message, "nullValue"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.nullValue);
                if (message.numberValue != null && Object.hasOwnProperty.call(message, "numberValue"))
                    writer.uint32(/* id 2, wireType 1 =*/17).double(message.numberValue);
                if (message.stringValue != null && Object.hasOwnProperty.call(message, "stringValue"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.stringValue);
                if (message.boolValue != null && Object.hasOwnProperty.call(message, "boolValue"))
                    writer.uint32(/* id 4, wireType 0 =*/32).bool(message.boolValue);
                if (message.structValue != null && Object.hasOwnProperty.call(message, "structValue"))
                    $root.google.protobuf.Struct.encode(message.structValue, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                if (message.listValue != null && Object.hasOwnProperty.call(message, "listValue"))
                    $root.google.protobuf.ListValue.encode(message.listValue, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified Value message, length delimited. Does not implicitly {@link google.protobuf.Value.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.Value
             * @static
             * @param {google.protobuf.IValue} message Value message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Value.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Value message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Value
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Value} Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Value.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Value();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.nullValue = reader.int32();
                        break;
                    case 2:
                        message.numberValue = reader.double();
                        break;
                    case 3:
                        message.stringValue = reader.string();
                        break;
                    case 4:
                        message.boolValue = reader.bool();
                        break;
                    case 5:
                        message.structValue = $root.google.protobuf.Struct.decode(reader, reader.uint32());
                        break;
                    case 6:
                        message.listValue = $root.google.protobuf.ListValue.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Value message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.Value
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Value} Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Value.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Value message.
             * @function verify
             * @memberof google.protobuf.Value
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Value.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                var properties = {};
                if (message.nullValue != null && message.hasOwnProperty("nullValue")) {
                    properties.kind = 1;
                    switch (message.nullValue) {
                    default:
                        return "nullValue: enum value expected";
                    case 0:
                        break;
                    }
                }
                if (message.numberValue != null && message.hasOwnProperty("numberValue")) {
                    if (properties.kind === 1)
                        return "kind: multiple values";
                    properties.kind = 1;
                    if (typeof message.numberValue !== "number")
                        return "numberValue: number expected";
                }
                if (message.stringValue != null && message.hasOwnProperty("stringValue")) {
                    if (properties.kind === 1)
                        return "kind: multiple values";
                    properties.kind = 1;
                    if (!$util.isString(message.stringValue))
                        return "stringValue: string expected";
                }
                if (message.boolValue != null && message.hasOwnProperty("boolValue")) {
                    if (properties.kind === 1)
                        return "kind: multiple values";
                    properties.kind = 1;
                    if (typeof message.boolValue !== "boolean")
                        return "boolValue: boolean expected";
                }
                if (message.structValue != null && message.hasOwnProperty("structValue")) {
                    if (properties.kind === 1)
                        return "kind: multiple values";
                    properties.kind = 1;
                    {
                        var error = $root.google.protobuf.Struct.verify(message.structValue);
                        if (error)
                            return "structValue." + error;
                    }
                }
                if (message.listValue != null && message.hasOwnProperty("listValue")) {
                    if (properties.kind === 1)
                        return "kind: multiple values";
                    properties.kind = 1;
                    {
                        var error = $root.google.protobuf.ListValue.verify(message.listValue);
                        if (error)
                            return "listValue." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a Value message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Value
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Value} Value
             */
            Value.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Value)
                    return object;
                var message = new $root.google.protobuf.Value();
                switch (object.nullValue) {
                case "NULL_VALUE":
                case 0:
                    message.nullValue = 0;
                    break;
                }
                if (object.numberValue != null)
                    message.numberValue = Number(object.numberValue);
                if (object.stringValue != null)
                    message.stringValue = String(object.stringValue);
                if (object.boolValue != null)
                    message.boolValue = Boolean(object.boolValue);
                if (object.structValue != null) {
                    message.structValue = $root.google.protobuf.Struct.fromObject(object.structValue);
                }
                if (object.listValue != null) {
                    message.listValue = $root.google.protobuf.ListValue.fromObject(object.listValue);
                }
                return message;
            };

            /**
             * Creates a plain object from a Value message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Value
             * @static
             * @param {google.protobuf.Value} message Value
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Value.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (message.nullValue != null && message.hasOwnProperty("nullValue")) {
                    object.nullValue = options.enums === String ? $root.google.protobuf.NullValue[message.nullValue] : message.nullValue;
                    if (options.oneofs)
                        object.kind = "nullValue";
                }
                if (message.numberValue != null && message.hasOwnProperty("numberValue")) {
                    object.numberValue = options.json && !isFinite(message.numberValue) ? String(message.numberValue) : message.numberValue;
                    if (options.oneofs)
                        object.kind = "numberValue";
                }
                if (message.stringValue != null && message.hasOwnProperty("stringValue")) {
                    object.stringValue = message.stringValue;
                    if (options.oneofs)
                        object.kind = "stringValue";
                }
                if (message.boolValue != null && message.hasOwnProperty("boolValue")) {
                    object.boolValue = message.boolValue;
                    if (options.oneofs)
                        object.kind = "boolValue";
                }
                if (message.structValue != null && message.hasOwnProperty("structValue")) {
                    object.structValue = $root.google.protobuf.Struct.toObject(message.structValue, options);
                    if (options.oneofs)
                        object.kind = "structValue";
                }
                if (message.listValue != null && message.hasOwnProperty("listValue")) {
                    object.listValue = $root.google.protobuf.ListValue.toObject(message.listValue, options);
                    if (options.oneofs)
                        object.kind = "listValue";
                }
                return object;
            };

            /**
             * Converts this Value to JSON.
             * @function toJSON
             * @memberof google.protobuf.Value
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Value.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Value;
        })();

        /**
         * NullValue enum.
         * @name google.protobuf.NullValue
         * @enum {number}
         * @property {number} NULL_VALUE=0 NULL_VALUE value
         */
        protobuf.NullValue = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "NULL_VALUE"] = 0;
            return values;
        })();

        protobuf.ListValue = (function() {

            /**
             * Properties of a ListValue.
             * @memberof google.protobuf
             * @interface IListValue
             * @property {Array.<google.protobuf.IValue>|null} [values] ListValue values
             */

            /**
             * Constructs a new ListValue.
             * @memberof google.protobuf
             * @classdesc Represents a ListValue.
             * @implements IListValue
             * @constructor
             * @param {google.protobuf.IListValue=} [properties] Properties to set
             */
            function ListValue(properties) {
                this.values = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ListValue values.
             * @member {Array.<google.protobuf.IValue>} values
             * @memberof google.protobuf.ListValue
             * @instance
             */
            ListValue.prototype.values = $util.emptyArray;

            /**
             * Creates a new ListValue instance using the specified properties.
             * @function create
             * @memberof google.protobuf.ListValue
             * @static
             * @param {google.protobuf.IListValue=} [properties] Properties to set
             * @returns {google.protobuf.ListValue} ListValue instance
             */
            ListValue.create = function create(properties) {
                return new ListValue(properties);
            };

            /**
             * Encodes the specified ListValue message. Does not implicitly {@link google.protobuf.ListValue.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.ListValue
             * @static
             * @param {google.protobuf.IListValue} message ListValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ListValue.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.values != null && message.values.length)
                    for (var i = 0; i < message.values.length; ++i)
                        $root.google.protobuf.Value.encode(message.values[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified ListValue message, length delimited. Does not implicitly {@link google.protobuf.ListValue.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.ListValue
             * @static
             * @param {google.protobuf.IListValue} message ListValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ListValue.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ListValue message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.ListValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.ListValue} ListValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ListValue.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.ListValue();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.values && message.values.length))
                            message.values = [];
                        message.values.push($root.google.protobuf.Value.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ListValue message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.ListValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.ListValue} ListValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ListValue.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ListValue message.
             * @function verify
             * @memberof google.protobuf.ListValue
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ListValue.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.values != null && message.hasOwnProperty("values")) {
                    if (!Array.isArray(message.values))
                        return "values: array expected";
                    for (var i = 0; i < message.values.length; ++i) {
                        var error = $root.google.protobuf.Value.verify(message.values[i]);
                        if (error)
                            return "values." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a ListValue message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.ListValue
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.ListValue} ListValue
             */
            ListValue.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.ListValue)
                    return object;
                var message = new $root.google.protobuf.ListValue();
                if (object.values) {
                    if (!Array.isArray(object.values))
                        throw TypeError(".google.protobuf.ListValue.values: array expected");
                    message.values = [];
                    for (var i = 0; i < object.values.length; ++i) {
                        message.values[i] = $root.google.protobuf.Value.fromObject(object.values[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a ListValue message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.ListValue
             * @static
             * @param {google.protobuf.ListValue} message ListValue
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ListValue.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.values = [];
                if (message.values && message.values.length) {
                    object.values = [];
                    for (var j = 0; j < message.values.length; ++j)
                        object.values[j] = $root.google.protobuf.Value.toObject(message.values[j], options);
                }
                return object;
            };

            /**
             * Converts this ListValue to JSON.
             * @function toJSON
             * @memberof google.protobuf.ListValue
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ListValue.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ListValue;
        })();

        return protobuf;
    })();

    return google;
})();

module.exports = $root;

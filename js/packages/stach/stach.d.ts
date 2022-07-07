import * as $protobuf from "protobufjs";
export = stach;

declare namespace stach {


    /** Namespace factset. */
    namespace factset {

        /** Namespace protobuf. */
        namespace protobuf {

            /** Namespace stach. */
            namespace stach {

                /** Namespace v2. */
                namespace v2 {

                    /** Properties of a Package. */
                    interface IPackage {

                        /** Package version */
                        version?: (string|null);

                        /** Package primaryTableIds */
                        primaryTableIds?: (string[]|null);

                        /** Package tables */
                        tables?: ({ [k: string]: factset.protobuf.stach.v2.table.ITable }|null);
                    }

                    /** Represents a Package. */
                    class Package implements IPackage {

                        /**
                         * Constructs a new Package.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: factset.protobuf.stach.v2.IPackage);

                        /** Package version. */
                        public version: string;

                        /** Package primaryTableIds. */
                        public primaryTableIds: string[];

                        /** Package tables. */
                        public tables: { [k: string]: factset.protobuf.stach.v2.table.ITable };

                        /**
                         * Creates a new Package instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Package instance
                         */
                        public static create(properties?: factset.protobuf.stach.v2.IPackage): factset.protobuf.stach.v2.Package;

                        /**
                         * Encodes the specified Package message. Does not implicitly {@link factset.protobuf.stach.v2.Package.verify|verify} messages.
                         * @param message Package message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: factset.protobuf.stach.v2.IPackage, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Package message, length delimited. Does not implicitly {@link factset.protobuf.stach.v2.Package.verify|verify} messages.
                         * @param message Package message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: factset.protobuf.stach.v2.IPackage, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Package message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Package
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): factset.protobuf.stach.v2.Package;

                        /**
                         * Decodes a Package message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Package
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): factset.protobuf.stach.v2.Package;

                        /**
                         * Verifies a Package message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Package message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Package
                         */
                        public static fromObject(object: { [k: string]: any }): factset.protobuf.stach.v2.Package;

                        /**
                         * Creates a plain object from a Package message. Also converts values to other types if specified.
                         * @param message Package
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: factset.protobuf.stach.v2.Package, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Package to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a RowOrganizedPackage. */
                    interface IRowOrganizedPackage {

                        /** RowOrganizedPackage version */
                        version?: (string|null);

                        /** RowOrganizedPackage tables */
                        tables?: ({ [k: string]: factset.protobuf.stach.v2.RowOrganizedPackage.ITable }|null);
                    }

                    /** Represents a RowOrganizedPackage. */
                    class RowOrganizedPackage implements IRowOrganizedPackage {

                        /**
                         * Constructs a new RowOrganizedPackage.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: factset.protobuf.stach.v2.IRowOrganizedPackage);

                        /** RowOrganizedPackage version. */
                        public version: string;

                        /** RowOrganizedPackage tables. */
                        public tables: { [k: string]: factset.protobuf.stach.v2.RowOrganizedPackage.ITable };

                        /**
                         * Creates a new RowOrganizedPackage instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns RowOrganizedPackage instance
                         */
                        public static create(properties?: factset.protobuf.stach.v2.IRowOrganizedPackage): factset.protobuf.stach.v2.RowOrganizedPackage;

                        /**
                         * Encodes the specified RowOrganizedPackage message. Does not implicitly {@link factset.protobuf.stach.v2.RowOrganizedPackage.verify|verify} messages.
                         * @param message RowOrganizedPackage message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: factset.protobuf.stach.v2.IRowOrganizedPackage, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified RowOrganizedPackage message, length delimited. Does not implicitly {@link factset.protobuf.stach.v2.RowOrganizedPackage.verify|verify} messages.
                         * @param message RowOrganizedPackage message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: factset.protobuf.stach.v2.IRowOrganizedPackage, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a RowOrganizedPackage message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns RowOrganizedPackage
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): factset.protobuf.stach.v2.RowOrganizedPackage;

                        /**
                         * Decodes a RowOrganizedPackage message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns RowOrganizedPackage
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): factset.protobuf.stach.v2.RowOrganizedPackage;

                        /**
                         * Verifies a RowOrganizedPackage message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a RowOrganizedPackage message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns RowOrganizedPackage
                         */
                        public static fromObject(object: { [k: string]: any }): factset.protobuf.stach.v2.RowOrganizedPackage;

                        /**
                         * Creates a plain object from a RowOrganizedPackage message. Also converts values to other types if specified.
                         * @param message RowOrganizedPackage
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: factset.protobuf.stach.v2.RowOrganizedPackage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this RowOrganizedPackage to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    namespace RowOrganizedPackage {

                        /** Properties of a Table. */
                        interface ITable {

                            /** Table definition */
                            definition?: (factset.protobuf.stach.v2.RowOrganizedPackage.ITableDefinition|null);

                            /** Table headersDefinition */
                            headersDefinition?: (factset.protobuf.stach.v2.RowOrganizedPackage.ITableDefinition|null);

                            /** Table data */
                            data?: (factset.protobuf.stach.v2.RowOrganizedPackage.ITableData|null);
                        }

                        /** Represents a Table. */
                        class Table implements ITable {

                            /**
                             * Constructs a new Table.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: factset.protobuf.stach.v2.RowOrganizedPackage.ITable);

                            /** Table definition. */
                            public definition?: (factset.protobuf.stach.v2.RowOrganizedPackage.ITableDefinition|null);

                            /** Table headersDefinition. */
                            public headersDefinition?: (factset.protobuf.stach.v2.RowOrganizedPackage.ITableDefinition|null);

                            /** Table data. */
                            public data?: (factset.protobuf.stach.v2.RowOrganizedPackage.ITableData|null);

                            /**
                             * Creates a new Table instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Table instance
                             */
                            public static create(properties?: factset.protobuf.stach.v2.RowOrganizedPackage.ITable): factset.protobuf.stach.v2.RowOrganizedPackage.Table;

                            /**
                             * Encodes the specified Table message. Does not implicitly {@link factset.protobuf.stach.v2.RowOrganizedPackage.Table.verify|verify} messages.
                             * @param message Table message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: factset.protobuf.stach.v2.RowOrganizedPackage.ITable, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified Table message, length delimited. Does not implicitly {@link factset.protobuf.stach.v2.RowOrganizedPackage.Table.verify|verify} messages.
                             * @param message Table message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: factset.protobuf.stach.v2.RowOrganizedPackage.ITable, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a Table message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Table
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): factset.protobuf.stach.v2.RowOrganizedPackage.Table;

                            /**
                             * Decodes a Table message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns Table
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): factset.protobuf.stach.v2.RowOrganizedPackage.Table;

                            /**
                             * Verifies a Table message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a Table message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns Table
                             */
                            public static fromObject(object: { [k: string]: any }): factset.protobuf.stach.v2.RowOrganizedPackage.Table;

                            /**
                             * Creates a plain object from a Table message. Also converts values to other types if specified.
                             * @param message Table
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: factset.protobuf.stach.v2.RowOrganizedPackage.Table, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this Table to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a TableDefinition. */
                        interface ITableDefinition {

                            /** TableDefinition columns */
                            columns?: (factset.protobuf.stach.v2.table.IColumnDefinition[]|null);
                        }

                        /** Represents a TableDefinition. */
                        class TableDefinition implements ITableDefinition {

                            /**
                             * Constructs a new TableDefinition.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: factset.protobuf.stach.v2.RowOrganizedPackage.ITableDefinition);

                            /** TableDefinition columns. */
                            public columns: factset.protobuf.stach.v2.table.IColumnDefinition[];

                            /**
                             * Creates a new TableDefinition instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns TableDefinition instance
                             */
                            public static create(properties?: factset.protobuf.stach.v2.RowOrganizedPackage.ITableDefinition): factset.protobuf.stach.v2.RowOrganizedPackage.TableDefinition;

                            /**
                             * Encodes the specified TableDefinition message. Does not implicitly {@link factset.protobuf.stach.v2.RowOrganizedPackage.TableDefinition.verify|verify} messages.
                             * @param message TableDefinition message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: factset.protobuf.stach.v2.RowOrganizedPackage.ITableDefinition, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified TableDefinition message, length delimited. Does not implicitly {@link factset.protobuf.stach.v2.RowOrganizedPackage.TableDefinition.verify|verify} messages.
                             * @param message TableDefinition message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: factset.protobuf.stach.v2.RowOrganizedPackage.ITableDefinition, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a TableDefinition message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns TableDefinition
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): factset.protobuf.stach.v2.RowOrganizedPackage.TableDefinition;

                            /**
                             * Decodes a TableDefinition message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns TableDefinition
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): factset.protobuf.stach.v2.RowOrganizedPackage.TableDefinition;

                            /**
                             * Verifies a TableDefinition message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a TableDefinition message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns TableDefinition
                             */
                            public static fromObject(object: { [k: string]: any }): factset.protobuf.stach.v2.RowOrganizedPackage.TableDefinition;

                            /**
                             * Creates a plain object from a TableDefinition message. Also converts values to other types if specified.
                             * @param message TableDefinition
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: factset.protobuf.stach.v2.RowOrganizedPackage.TableDefinition, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this TableDefinition to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a TableData. */
                        interface ITableData {

                            /** TableData rows */
                            rows?: (factset.protobuf.stach.v2.RowOrganizedPackage.IRow[]|null);

                            /** TableData tableMetadata */
                            tableMetadata?: ({ [k: string]: factset.protobuf.stach.v2.table.IMetadataItem }|null);

                            /** TableData columnMetadata */
                            columnMetadata?: ({ [k: string]: factset.protobuf.stach.v2.RowOrganizedPackage.IMapOfMetadata }|null);
                        }

                        /** Represents a TableData. */
                        class TableData implements ITableData {

                            /**
                             * Constructs a new TableData.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: factset.protobuf.stach.v2.RowOrganizedPackage.ITableData);

                            /** TableData rows. */
                            public rows: factset.protobuf.stach.v2.RowOrganizedPackage.IRow[];

                            /** TableData tableMetadata. */
                            public tableMetadata: { [k: string]: factset.protobuf.stach.v2.table.IMetadataItem };

                            /** TableData columnMetadata. */
                            public columnMetadata: { [k: string]: factset.protobuf.stach.v2.RowOrganizedPackage.IMapOfMetadata };

                            /**
                             * Creates a new TableData instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns TableData instance
                             */
                            public static create(properties?: factset.protobuf.stach.v2.RowOrganizedPackage.ITableData): factset.protobuf.stach.v2.RowOrganizedPackage.TableData;

                            /**
                             * Encodes the specified TableData message. Does not implicitly {@link factset.protobuf.stach.v2.RowOrganizedPackage.TableData.verify|verify} messages.
                             * @param message TableData message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: factset.protobuf.stach.v2.RowOrganizedPackage.ITableData, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified TableData message, length delimited. Does not implicitly {@link factset.protobuf.stach.v2.RowOrganizedPackage.TableData.verify|verify} messages.
                             * @param message TableData message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: factset.protobuf.stach.v2.RowOrganizedPackage.ITableData, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a TableData message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns TableData
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): factset.protobuf.stach.v2.RowOrganizedPackage.TableData;

                            /**
                             * Decodes a TableData message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns TableData
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): factset.protobuf.stach.v2.RowOrganizedPackage.TableData;

                            /**
                             * Verifies a TableData message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a TableData message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns TableData
                             */
                            public static fromObject(object: { [k: string]: any }): factset.protobuf.stach.v2.RowOrganizedPackage.TableData;

                            /**
                             * Creates a plain object from a TableData message. Also converts values to other types if specified.
                             * @param message TableData
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: factset.protobuf.stach.v2.RowOrganizedPackage.TableData, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this TableData to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a Row. */
                        interface IRow {

                            /** Row id */
                            id?: (string|null);

                            /** Row rowType */
                            rowType?: (factset.protobuf.stach.v2.RowOrganizedPackage.Row.RowType|null);

                            /** Row cells */
                            cells?: (google.protobuf.IListValue|null);

                            /** Row values */
                            values?: (google.protobuf.IStruct|null);

                            /** Row cellDetails */
                            cellDetails?: ({ [k: string]: factset.protobuf.stach.v2.RowOrganizedPackage.ICellDetail }|null);

                            /** Row headerCellDetails */
                            headerCellDetails?: ({ [k: string]: factset.protobuf.stach.v2.RowOrganizedPackage.IHeaderCellDetail }|null);

                            /** Row rowMetadata */
                            rowMetadata?: ({ [k: string]: factset.protobuf.stach.v2.table.IMetadataItem }|null);
                        }

                        /** Represents a Row. */
                        class Row implements IRow {

                            /**
                             * Constructs a new Row.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: factset.protobuf.stach.v2.RowOrganizedPackage.IRow);

                            /** Row id. */
                            public id: string;

                            /** Row rowType. */
                            public rowType: factset.protobuf.stach.v2.RowOrganizedPackage.Row.RowType;

                            /** Row cells. */
                            public cells?: (google.protobuf.IListValue|null);

                            /** Row values. */
                            public values?: (google.protobuf.IStruct|null);

                            /** Row cellDetails. */
                            public cellDetails: { [k: string]: factset.protobuf.stach.v2.RowOrganizedPackage.ICellDetail };

                            /** Row headerCellDetails. */
                            public headerCellDetails: { [k: string]: factset.protobuf.stach.v2.RowOrganizedPackage.IHeaderCellDetail };

                            /** Row rowMetadata. */
                            public rowMetadata: { [k: string]: factset.protobuf.stach.v2.table.IMetadataItem };

                            /** Row kind. */
                            public kind?: ("cells"|"values");

                            /**
                             * Creates a new Row instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Row instance
                             */
                            public static create(properties?: factset.protobuf.stach.v2.RowOrganizedPackage.IRow): factset.protobuf.stach.v2.RowOrganizedPackage.Row;

                            /**
                             * Encodes the specified Row message. Does not implicitly {@link factset.protobuf.stach.v2.RowOrganizedPackage.Row.verify|verify} messages.
                             * @param message Row message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: factset.protobuf.stach.v2.RowOrganizedPackage.IRow, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified Row message, length delimited. Does not implicitly {@link factset.protobuf.stach.v2.RowOrganizedPackage.Row.verify|verify} messages.
                             * @param message Row message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: factset.protobuf.stach.v2.RowOrganizedPackage.IRow, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a Row message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Row
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): factset.protobuf.stach.v2.RowOrganizedPackage.Row;

                            /**
                             * Decodes a Row message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns Row
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): factset.protobuf.stach.v2.RowOrganizedPackage.Row;

                            /**
                             * Verifies a Row message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a Row message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns Row
                             */
                            public static fromObject(object: { [k: string]: any }): factset.protobuf.stach.v2.RowOrganizedPackage.Row;

                            /**
                             * Creates a plain object from a Row message. Also converts values to other types if specified.
                             * @param message Row
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: factset.protobuf.stach.v2.RowOrganizedPackage.Row, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this Row to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        namespace Row {

                            /** RowType enum. */
                            enum RowType {
                                Body = 0,
                                Header = 1
                            }
                        }

                        /** Properties of a CellDetail. */
                        interface ICellDetail {

                            /** CellDetail groupLevel */
                            groupLevel?: (number|null);

                            /** CellDetail cellDefinition */
                            cellDefinition?: (factset.protobuf.stach.v2.table.ICellDefinition|null);

                            /** CellDetail cellMetadata */
                            cellMetadata?: ({ [k: string]: factset.protobuf.stach.v2.table.IMetadataItem }|null);
                        }

                        /** Represents a CellDetail. */
                        class CellDetail implements ICellDetail {

                            /**
                             * Constructs a new CellDetail.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: factset.protobuf.stach.v2.RowOrganizedPackage.ICellDetail);

                            /** CellDetail groupLevel. */
                            public groupLevel: number;

                            /** CellDetail cellDefinition. */
                            public cellDefinition?: (factset.protobuf.stach.v2.table.ICellDefinition|null);

                            /** CellDetail cellMetadata. */
                            public cellMetadata: { [k: string]: factset.protobuf.stach.v2.table.IMetadataItem };

                            /**
                             * Creates a new CellDetail instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns CellDetail instance
                             */
                            public static create(properties?: factset.protobuf.stach.v2.RowOrganizedPackage.ICellDetail): factset.protobuf.stach.v2.RowOrganizedPackage.CellDetail;

                            /**
                             * Encodes the specified CellDetail message. Does not implicitly {@link factset.protobuf.stach.v2.RowOrganizedPackage.CellDetail.verify|verify} messages.
                             * @param message CellDetail message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: factset.protobuf.stach.v2.RowOrganizedPackage.ICellDetail, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified CellDetail message, length delimited. Does not implicitly {@link factset.protobuf.stach.v2.RowOrganizedPackage.CellDetail.verify|verify} messages.
                             * @param message CellDetail message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: factset.protobuf.stach.v2.RowOrganizedPackage.ICellDetail, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a CellDetail message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns CellDetail
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): factset.protobuf.stach.v2.RowOrganizedPackage.CellDetail;

                            /**
                             * Decodes a CellDetail message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns CellDetail
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): factset.protobuf.stach.v2.RowOrganizedPackage.CellDetail;

                            /**
                             * Verifies a CellDetail message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a CellDetail message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns CellDetail
                             */
                            public static fromObject(object: { [k: string]: any }): factset.protobuf.stach.v2.RowOrganizedPackage.CellDetail;

                            /**
                             * Creates a plain object from a CellDetail message. Also converts values to other types if specified.
                             * @param message CellDetail
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: factset.protobuf.stach.v2.RowOrganizedPackage.CellDetail, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this CellDetail to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a HeaderCellDetail. */
                        interface IHeaderCellDetail {

                            /** HeaderCellDetail colspan */
                            colspan?: (number|null);

                            /** HeaderCellDetail rowspan */
                            rowspan?: (number|null);

                            /** HeaderCellDetail source */
                            source?: (factset.protobuf.stach.v2.RowOrganizedPackage.HeaderCellDetail.TableSource|null);

                            /** HeaderCellDetail columnIndex */
                            columnIndex?: (number|null);

                            /** HeaderCellDetail cellDefinition */
                            cellDefinition?: (factset.protobuf.stach.v2.table.ICellDefinition|null);

                            /** HeaderCellDetail cellMetadata */
                            cellMetadata?: ({ [k: string]: factset.protobuf.stach.v2.table.IMetadataItem }|null);
                        }

                        /** Represents a HeaderCellDetail. */
                        class HeaderCellDetail implements IHeaderCellDetail {

                            /**
                             * Constructs a new HeaderCellDetail.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: factset.protobuf.stach.v2.RowOrganizedPackage.IHeaderCellDetail);

                            /** HeaderCellDetail colspan. */
                            public colspan: number;

                            /** HeaderCellDetail rowspan. */
                            public rowspan: number;

                            /** HeaderCellDetail source. */
                            public source: factset.protobuf.stach.v2.RowOrganizedPackage.HeaderCellDetail.TableSource;

                            /** HeaderCellDetail columnIndex. */
                            public columnIndex: number;

                            /** HeaderCellDetail cellDefinition. */
                            public cellDefinition?: (factset.protobuf.stach.v2.table.ICellDefinition|null);

                            /** HeaderCellDetail cellMetadata. */
                            public cellMetadata: { [k: string]: factset.protobuf.stach.v2.table.IMetadataItem };

                            /**
                             * Creates a new HeaderCellDetail instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns HeaderCellDetail instance
                             */
                            public static create(properties?: factset.protobuf.stach.v2.RowOrganizedPackage.IHeaderCellDetail): factset.protobuf.stach.v2.RowOrganizedPackage.HeaderCellDetail;

                            /**
                             * Encodes the specified HeaderCellDetail message. Does not implicitly {@link factset.protobuf.stach.v2.RowOrganizedPackage.HeaderCellDetail.verify|verify} messages.
                             * @param message HeaderCellDetail message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: factset.protobuf.stach.v2.RowOrganizedPackage.IHeaderCellDetail, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified HeaderCellDetail message, length delimited. Does not implicitly {@link factset.protobuf.stach.v2.RowOrganizedPackage.HeaderCellDetail.verify|verify} messages.
                             * @param message HeaderCellDetail message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: factset.protobuf.stach.v2.RowOrganizedPackage.IHeaderCellDetail, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a HeaderCellDetail message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns HeaderCellDetail
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): factset.protobuf.stach.v2.RowOrganizedPackage.HeaderCellDetail;

                            /**
                             * Decodes a HeaderCellDetail message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns HeaderCellDetail
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): factset.protobuf.stach.v2.RowOrganizedPackage.HeaderCellDetail;

                            /**
                             * Verifies a HeaderCellDetail message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a HeaderCellDetail message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns HeaderCellDetail
                             */
                            public static fromObject(object: { [k: string]: any }): factset.protobuf.stach.v2.RowOrganizedPackage.HeaderCellDetail;

                            /**
                             * Creates a plain object from a HeaderCellDetail message. Also converts values to other types if specified.
                             * @param message HeaderCellDetail
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: factset.protobuf.stach.v2.RowOrganizedPackage.HeaderCellDetail, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this HeaderCellDetail to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        namespace HeaderCellDetail {

                            /** TableSource enum. */
                            enum TableSource {
                                UNKNOWN = 0,
                                NONE = 1,
                                PRIMARY = 2,
                                HEADERS = 3
                            }
                        }

                        /** Properties of a MapOfMetadata. */
                        interface IMapOfMetadata {

                            /** MapOfMetadata items */
                            items?: ({ [k: string]: factset.protobuf.stach.v2.table.IMetadataItem }|null);
                        }

                        /** Represents a MapOfMetadata. */
                        class MapOfMetadata implements IMapOfMetadata {

                            /**
                             * Constructs a new MapOfMetadata.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: factset.protobuf.stach.v2.RowOrganizedPackage.IMapOfMetadata);

                            /** MapOfMetadata items. */
                            public items: { [k: string]: factset.protobuf.stach.v2.table.IMetadataItem };

                            /**
                             * Creates a new MapOfMetadata instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns MapOfMetadata instance
                             */
                            public static create(properties?: factset.protobuf.stach.v2.RowOrganizedPackage.IMapOfMetadata): factset.protobuf.stach.v2.RowOrganizedPackage.MapOfMetadata;

                            /**
                             * Encodes the specified MapOfMetadata message. Does not implicitly {@link factset.protobuf.stach.v2.RowOrganizedPackage.MapOfMetadata.verify|verify} messages.
                             * @param message MapOfMetadata message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: factset.protobuf.stach.v2.RowOrganizedPackage.IMapOfMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified MapOfMetadata message, length delimited. Does not implicitly {@link factset.protobuf.stach.v2.RowOrganizedPackage.MapOfMetadata.verify|verify} messages.
                             * @param message MapOfMetadata message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: factset.protobuf.stach.v2.RowOrganizedPackage.IMapOfMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a MapOfMetadata message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns MapOfMetadata
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): factset.protobuf.stach.v2.RowOrganizedPackage.MapOfMetadata;

                            /**
                             * Decodes a MapOfMetadata message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns MapOfMetadata
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): factset.protobuf.stach.v2.RowOrganizedPackage.MapOfMetadata;

                            /**
                             * Verifies a MapOfMetadata message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a MapOfMetadata message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns MapOfMetadata
                             */
                            public static fromObject(object: { [k: string]: any }): factset.protobuf.stach.v2.RowOrganizedPackage.MapOfMetadata;

                            /**
                             * Creates a plain object from a MapOfMetadata message. Also converts values to other types if specified.
                             * @param message MapOfMetadata
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: factset.protobuf.stach.v2.RowOrganizedPackage.MapOfMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this MapOfMetadata to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }
                    }

                    /** Namespace table. */
                    namespace table {

                        /** Properties of a CellDefinition. */
                        interface ICellDefinition {

                            /** CellDefinition type */
                            type?: (string|null);

                            /** CellDefinition format */
                            format?: (factset.protobuf.stach.v2.table.IDataFormat|null);
                        }

                        /** Represents a CellDefinition. */
                        class CellDefinition implements ICellDefinition {

                            /**
                             * Constructs a new CellDefinition.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: factset.protobuf.stach.v2.table.ICellDefinition);

                            /** CellDefinition type. */
                            public type: string;

                            /** CellDefinition format. */
                            public format?: (factset.protobuf.stach.v2.table.IDataFormat|null);

                            /**
                             * Creates a new CellDefinition instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns CellDefinition instance
                             */
                            public static create(properties?: factset.protobuf.stach.v2.table.ICellDefinition): factset.protobuf.stach.v2.table.CellDefinition;

                            /**
                             * Encodes the specified CellDefinition message. Does not implicitly {@link factset.protobuf.stach.v2.table.CellDefinition.verify|verify} messages.
                             * @param message CellDefinition message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: factset.protobuf.stach.v2.table.ICellDefinition, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified CellDefinition message, length delimited. Does not implicitly {@link factset.protobuf.stach.v2.table.CellDefinition.verify|verify} messages.
                             * @param message CellDefinition message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: factset.protobuf.stach.v2.table.ICellDefinition, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a CellDefinition message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns CellDefinition
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): factset.protobuf.stach.v2.table.CellDefinition;

                            /**
                             * Decodes a CellDefinition message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns CellDefinition
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): factset.protobuf.stach.v2.table.CellDefinition;

                            /**
                             * Verifies a CellDefinition message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a CellDefinition message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns CellDefinition
                             */
                            public static fromObject(object: { [k: string]: any }): factset.protobuf.stach.v2.table.CellDefinition;

                            /**
                             * Creates a plain object from a CellDefinition message. Also converts values to other types if specified.
                             * @param message CellDefinition
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: factset.protobuf.stach.v2.table.CellDefinition, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this CellDefinition to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a ColumnData. */
                        interface IColumnData {

                            /** ColumnData ranges */
                            ranges?: ({ [k: string]: number }|null);

                            /** ColumnData values */
                            values?: (google.protobuf.IListValue|null);

                            /** ColumnData definitions */
                            definitions?: (factset.protobuf.stach.v2.table.ICellDefinition[]|null);
                        }

                        /** Represents a ColumnData. */
                        class ColumnData implements IColumnData {

                            /**
                             * Constructs a new ColumnData.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: factset.protobuf.stach.v2.table.IColumnData);

                            /** ColumnData ranges. */
                            public ranges: { [k: string]: number };

                            /** ColumnData values. */
                            public values?: (google.protobuf.IListValue|null);

                            /** ColumnData definitions. */
                            public definitions: factset.protobuf.stach.v2.table.ICellDefinition[];

                            /**
                             * Creates a new ColumnData instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns ColumnData instance
                             */
                            public static create(properties?: factset.protobuf.stach.v2.table.IColumnData): factset.protobuf.stach.v2.table.ColumnData;

                            /**
                             * Encodes the specified ColumnData message. Does not implicitly {@link factset.protobuf.stach.v2.table.ColumnData.verify|verify} messages.
                             * @param message ColumnData message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: factset.protobuf.stach.v2.table.IColumnData, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified ColumnData message, length delimited. Does not implicitly {@link factset.protobuf.stach.v2.table.ColumnData.verify|verify} messages.
                             * @param message ColumnData message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: factset.protobuf.stach.v2.table.IColumnData, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a ColumnData message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns ColumnData
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): factset.protobuf.stach.v2.table.ColumnData;

                            /**
                             * Decodes a ColumnData message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns ColumnData
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): factset.protobuf.stach.v2.table.ColumnData;

                            /**
                             * Verifies a ColumnData message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a ColumnData message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns ColumnData
                             */
                            public static fromObject(object: { [k: string]: any }): factset.protobuf.stach.v2.table.ColumnData;

                            /**
                             * Creates a plain object from a ColumnData message. Also converts values to other types if specified.
                             * @param message ColumnData
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: factset.protobuf.stach.v2.table.ColumnData, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this ColumnData to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a ColumnDefinition. */
                        interface IColumnDefinition {

                            /** ColumnDefinition id */
                            id?: (string|null);

                            /** ColumnDefinition name */
                            name?: (string|null);

                            /** ColumnDefinition description */
                            description?: (string|null);

                            /** ColumnDefinition type */
                            type?: (string|null);

                            /** ColumnDefinition isDimension */
                            isDimension?: (boolean|null);

                            /** ColumnDefinition isHidden */
                            isHidden?: (boolean|null);

                            /** ColumnDefinition nextSiblingId */
                            nextSiblingId?: (string|null);

                            /** ColumnDefinition parentId */
                            parentId?: (string|null);

                            /** ColumnDefinition headerId */
                            headerId?: (string|null);

                            /** ColumnDefinition format */
                            format?: (factset.protobuf.stach.v2.table.IDataFormat|null);
                        }

                        /** Represents a ColumnDefinition. */
                        class ColumnDefinition implements IColumnDefinition {

                            /**
                             * Constructs a new ColumnDefinition.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: factset.protobuf.stach.v2.table.IColumnDefinition);

                            /** ColumnDefinition id. */
                            public id: string;

                            /** ColumnDefinition name. */
                            public name: string;

                            /** ColumnDefinition description. */
                            public description: string;

                            /** ColumnDefinition type. */
                            public type: string;

                            /** ColumnDefinition isDimension. */
                            public isDimension: boolean;

                            /** ColumnDefinition isHidden. */
                            public isHidden: boolean;

                            /** ColumnDefinition nextSiblingId. */
                            public nextSiblingId: string;

                            /** ColumnDefinition parentId. */
                            public parentId: string;

                            /** ColumnDefinition headerId. */
                            public headerId: string;

                            /** ColumnDefinition format. */
                            public format?: (factset.protobuf.stach.v2.table.IDataFormat|null);

                            /**
                             * Creates a new ColumnDefinition instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns ColumnDefinition instance
                             */
                            public static create(properties?: factset.protobuf.stach.v2.table.IColumnDefinition): factset.protobuf.stach.v2.table.ColumnDefinition;

                            /**
                             * Encodes the specified ColumnDefinition message. Does not implicitly {@link factset.protobuf.stach.v2.table.ColumnDefinition.verify|verify} messages.
                             * @param message ColumnDefinition message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: factset.protobuf.stach.v2.table.IColumnDefinition, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified ColumnDefinition message, length delimited. Does not implicitly {@link factset.protobuf.stach.v2.table.ColumnDefinition.verify|verify} messages.
                             * @param message ColumnDefinition message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: factset.protobuf.stach.v2.table.IColumnDefinition, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a ColumnDefinition message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns ColumnDefinition
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): factset.protobuf.stach.v2.table.ColumnDefinition;

                            /**
                             * Decodes a ColumnDefinition message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns ColumnDefinition
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): factset.protobuf.stach.v2.table.ColumnDefinition;

                            /**
                             * Verifies a ColumnDefinition message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a ColumnDefinition message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns ColumnDefinition
                             */
                            public static fromObject(object: { [k: string]: any }): factset.protobuf.stach.v2.table.ColumnDefinition;

                            /**
                             * Creates a plain object from a ColumnDefinition message. Also converts values to other types if specified.
                             * @param message ColumnDefinition
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: factset.protobuf.stach.v2.table.ColumnDefinition, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this ColumnDefinition to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a DataFormat. */
                        interface IDataFormat {

                            /** DataFormat format */
                            format?: (string|null);

                            /** DataFormat nullFormat */
                            nullFormat?: (string|null);

                            /** DataFormat halign */
                            halign?: (factset.protobuf.stach.v2.table.HorizontalAlignment|null);

                            /** DataFormat valign */
                            valign?: (factset.protobuf.stach.v2.table.VerticalAlignment|null);
                        }

                        /** Represents a DataFormat. */
                        class DataFormat implements IDataFormat {

                            /**
                             * Constructs a new DataFormat.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: factset.protobuf.stach.v2.table.IDataFormat);

                            /** DataFormat format. */
                            public format: string;

                            /** DataFormat nullFormat. */
                            public nullFormat: string;

                            /** DataFormat halign. */
                            public halign: factset.protobuf.stach.v2.table.HorizontalAlignment;

                            /** DataFormat valign. */
                            public valign: factset.protobuf.stach.v2.table.VerticalAlignment;

                            /**
                             * Creates a new DataFormat instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns DataFormat instance
                             */
                            public static create(properties?: factset.protobuf.stach.v2.table.IDataFormat): factset.protobuf.stach.v2.table.DataFormat;

                            /**
                             * Encodes the specified DataFormat message. Does not implicitly {@link factset.protobuf.stach.v2.table.DataFormat.verify|verify} messages.
                             * @param message DataFormat message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: factset.protobuf.stach.v2.table.IDataFormat, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified DataFormat message, length delimited. Does not implicitly {@link factset.protobuf.stach.v2.table.DataFormat.verify|verify} messages.
                             * @param message DataFormat message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: factset.protobuf.stach.v2.table.IDataFormat, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a DataFormat message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns DataFormat
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): factset.protobuf.stach.v2.table.DataFormat;

                            /**
                             * Decodes a DataFormat message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns DataFormat
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): factset.protobuf.stach.v2.table.DataFormat;

                            /**
                             * Verifies a DataFormat message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a DataFormat message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns DataFormat
                             */
                            public static fromObject(object: { [k: string]: any }): factset.protobuf.stach.v2.table.DataFormat;

                            /**
                             * Creates a plain object from a DataFormat message. Also converts values to other types if specified.
                             * @param message DataFormat
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: factset.protobuf.stach.v2.table.DataFormat, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this DataFormat to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** HorizontalAlignment enum. */
                        enum HorizontalAlignment {
                            UNKNOWN_HALIGN = 0,
                            LEFT = 1,
                            CENTER = 2,
                            RIGHT = 3
                        }

                        /** Properties of a ListOfMetadata. */
                        interface IListOfMetadata {

                            /** ListOfMetadata ids */
                            ids?: (string[]|null);
                        }

                        /** Represents a ListOfMetadata. */
                        class ListOfMetadata implements IListOfMetadata {

                            /**
                             * Constructs a new ListOfMetadata.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: factset.protobuf.stach.v2.table.IListOfMetadata);

                            /** ListOfMetadata ids. */
                            public ids: string[];

                            /**
                             * Creates a new ListOfMetadata instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns ListOfMetadata instance
                             */
                            public static create(properties?: factset.protobuf.stach.v2.table.IListOfMetadata): factset.protobuf.stach.v2.table.ListOfMetadata;

                            /**
                             * Encodes the specified ListOfMetadata message. Does not implicitly {@link factset.protobuf.stach.v2.table.ListOfMetadata.verify|verify} messages.
                             * @param message ListOfMetadata message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: factset.protobuf.stach.v2.table.IListOfMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified ListOfMetadata message, length delimited. Does not implicitly {@link factset.protobuf.stach.v2.table.ListOfMetadata.verify|verify} messages.
                             * @param message ListOfMetadata message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: factset.protobuf.stach.v2.table.IListOfMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a ListOfMetadata message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns ListOfMetadata
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): factset.protobuf.stach.v2.table.ListOfMetadata;

                            /**
                             * Decodes a ListOfMetadata message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns ListOfMetadata
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): factset.protobuf.stach.v2.table.ListOfMetadata;

                            /**
                             * Verifies a ListOfMetadata message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a ListOfMetadata message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns ListOfMetadata
                             */
                            public static fromObject(object: { [k: string]: any }): factset.protobuf.stach.v2.table.ListOfMetadata;

                            /**
                             * Creates a plain object from a ListOfMetadata message. Also converts values to other types if specified.
                             * @param message ListOfMetadata
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: factset.protobuf.stach.v2.table.ListOfMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this ListOfMetadata to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a MetadataCollection. */
                        interface IMetadataCollection {

                            /** MetadataCollection items */
                            items?: ({ [k: string]: factset.protobuf.stach.v2.table.IMetadataItem }|null);

                            /** MetadataCollection locations */
                            locations?: (factset.protobuf.stach.v2.table.IMetadataLocations|null);
                        }

                        /** Represents a MetadataCollection. */
                        class MetadataCollection implements IMetadataCollection {

                            /**
                             * Constructs a new MetadataCollection.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: factset.protobuf.stach.v2.table.IMetadataCollection);

                            /** MetadataCollection items. */
                            public items: { [k: string]: factset.protobuf.stach.v2.table.IMetadataItem };

                            /** MetadataCollection locations. */
                            public locations?: (factset.protobuf.stach.v2.table.IMetadataLocations|null);

                            /**
                             * Creates a new MetadataCollection instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns MetadataCollection instance
                             */
                            public static create(properties?: factset.protobuf.stach.v2.table.IMetadataCollection): factset.protobuf.stach.v2.table.MetadataCollection;

                            /**
                             * Encodes the specified MetadataCollection message. Does not implicitly {@link factset.protobuf.stach.v2.table.MetadataCollection.verify|verify} messages.
                             * @param message MetadataCollection message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: factset.protobuf.stach.v2.table.IMetadataCollection, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified MetadataCollection message, length delimited. Does not implicitly {@link factset.protobuf.stach.v2.table.MetadataCollection.verify|verify} messages.
                             * @param message MetadataCollection message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: factset.protobuf.stach.v2.table.IMetadataCollection, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a MetadataCollection message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns MetadataCollection
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): factset.protobuf.stach.v2.table.MetadataCollection;

                            /**
                             * Decodes a MetadataCollection message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns MetadataCollection
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): factset.protobuf.stach.v2.table.MetadataCollection;

                            /**
                             * Verifies a MetadataCollection message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a MetadataCollection message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns MetadataCollection
                             */
                            public static fromObject(object: { [k: string]: any }): factset.protobuf.stach.v2.table.MetadataCollection;

                            /**
                             * Creates a plain object from a MetadataCollection message. Also converts values to other types if specified.
                             * @param message MetadataCollection
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: factset.protobuf.stach.v2.table.MetadataCollection, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this MetadataCollection to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a MetadataItem. */
                        interface IMetadataItem {

                            /** MetadataItem value */
                            value?: (google.protobuf.IValue|null);

                            /** MetadataItem reference */
                            reference?: (factset.protobuf.stach.v2.table.IReference|null);
                        }

                        /** Represents a MetadataItem. */
                        class MetadataItem implements IMetadataItem {

                            /**
                             * Constructs a new MetadataItem.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: factset.protobuf.stach.v2.table.IMetadataItem);

                            /** MetadataItem value. */
                            public value?: (google.protobuf.IValue|null);

                            /** MetadataItem reference. */
                            public reference?: (factset.protobuf.stach.v2.table.IReference|null);

                            /** MetadataItem data. */
                            public data?: ("value"|"reference");

                            /**
                             * Creates a new MetadataItem instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns MetadataItem instance
                             */
                            public static create(properties?: factset.protobuf.stach.v2.table.IMetadataItem): factset.protobuf.stach.v2.table.MetadataItem;

                            /**
                             * Encodes the specified MetadataItem message. Does not implicitly {@link factset.protobuf.stach.v2.table.MetadataItem.verify|verify} messages.
                             * @param message MetadataItem message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: factset.protobuf.stach.v2.table.IMetadataItem, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified MetadataItem message, length delimited. Does not implicitly {@link factset.protobuf.stach.v2.table.MetadataItem.verify|verify} messages.
                             * @param message MetadataItem message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: factset.protobuf.stach.v2.table.IMetadataItem, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a MetadataItem message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns MetadataItem
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): factset.protobuf.stach.v2.table.MetadataItem;

                            /**
                             * Decodes a MetadataItem message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns MetadataItem
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): factset.protobuf.stach.v2.table.MetadataItem;

                            /**
                             * Verifies a MetadataItem message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a MetadataItem message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns MetadataItem
                             */
                            public static fromObject(object: { [k: string]: any }): factset.protobuf.stach.v2.table.MetadataItem;

                            /**
                             * Creates a plain object from a MetadataItem message. Also converts values to other types if specified.
                             * @param message MetadataItem
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: factset.protobuf.stach.v2.table.MetadataItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this MetadataItem to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a MetadataLocations. */
                        interface IMetadataLocations {

                            /** MetadataLocations table */
                            table?: (string[]|null);

                            /** MetadataLocations columns */
                            columns?: ({ [k: string]: factset.protobuf.stach.v2.table.IListOfMetadata }|null);

                            /** MetadataLocations rows */
                            rows?: ({ [k: string]: factset.protobuf.stach.v2.table.IListOfMetadata }|null);

                            /** MetadataLocations cells */
                            cells?: (factset.protobuf.stach.v2.table.MetadataLocations.ICellsColumnMap|null);
                        }

                        /** Represents a MetadataLocations. */
                        class MetadataLocations implements IMetadataLocations {

                            /**
                             * Constructs a new MetadataLocations.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: factset.protobuf.stach.v2.table.IMetadataLocations);

                            /** MetadataLocations table. */
                            public table: string[];

                            /** MetadataLocations columns. */
                            public columns: { [k: string]: factset.protobuf.stach.v2.table.IListOfMetadata };

                            /** MetadataLocations rows. */
                            public rows: { [k: string]: factset.protobuf.stach.v2.table.IListOfMetadata };

                            /** MetadataLocations cells. */
                            public cells?: (factset.protobuf.stach.v2.table.MetadataLocations.ICellsColumnMap|null);

                            /**
                             * Creates a new MetadataLocations instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns MetadataLocations instance
                             */
                            public static create(properties?: factset.protobuf.stach.v2.table.IMetadataLocations): factset.protobuf.stach.v2.table.MetadataLocations;

                            /**
                             * Encodes the specified MetadataLocations message. Does not implicitly {@link factset.protobuf.stach.v2.table.MetadataLocations.verify|verify} messages.
                             * @param message MetadataLocations message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: factset.protobuf.stach.v2.table.IMetadataLocations, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified MetadataLocations message, length delimited. Does not implicitly {@link factset.protobuf.stach.v2.table.MetadataLocations.verify|verify} messages.
                             * @param message MetadataLocations message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: factset.protobuf.stach.v2.table.IMetadataLocations, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a MetadataLocations message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns MetadataLocations
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): factset.protobuf.stach.v2.table.MetadataLocations;

                            /**
                             * Decodes a MetadataLocations message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns MetadataLocations
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): factset.protobuf.stach.v2.table.MetadataLocations;

                            /**
                             * Verifies a MetadataLocations message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a MetadataLocations message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns MetadataLocations
                             */
                            public static fromObject(object: { [k: string]: any }): factset.protobuf.stach.v2.table.MetadataLocations;

                            /**
                             * Creates a plain object from a MetadataLocations message. Also converts values to other types if specified.
                             * @param message MetadataLocations
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: factset.protobuf.stach.v2.table.MetadataLocations, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this MetadataLocations to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        namespace MetadataLocations {

                            /** Properties of a CellsColumnMap. */
                            interface ICellsColumnMap {

                                /** CellsColumnMap columns */
                                columns?: ({ [k: string]: factset.protobuf.stach.v2.table.MetadataLocations.ICellsRowMap }|null);
                            }

                            /** Represents a CellsColumnMap. */
                            class CellsColumnMap implements ICellsColumnMap {

                                /**
                                 * Constructs a new CellsColumnMap.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: factset.protobuf.stach.v2.table.MetadataLocations.ICellsColumnMap);

                                /** CellsColumnMap columns. */
                                public columns: { [k: string]: factset.protobuf.stach.v2.table.MetadataLocations.ICellsRowMap };

                                /**
                                 * Creates a new CellsColumnMap instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns CellsColumnMap instance
                                 */
                                public static create(properties?: factset.protobuf.stach.v2.table.MetadataLocations.ICellsColumnMap): factset.protobuf.stach.v2.table.MetadataLocations.CellsColumnMap;

                                /**
                                 * Encodes the specified CellsColumnMap message. Does not implicitly {@link factset.protobuf.stach.v2.table.MetadataLocations.CellsColumnMap.verify|verify} messages.
                                 * @param message CellsColumnMap message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: factset.protobuf.stach.v2.table.MetadataLocations.ICellsColumnMap, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Encodes the specified CellsColumnMap message, length delimited. Does not implicitly {@link factset.protobuf.stach.v2.table.MetadataLocations.CellsColumnMap.verify|verify} messages.
                                 * @param message CellsColumnMap message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: factset.protobuf.stach.v2.table.MetadataLocations.ICellsColumnMap, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Decodes a CellsColumnMap message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns CellsColumnMap
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): factset.protobuf.stach.v2.table.MetadataLocations.CellsColumnMap;

                                /**
                                 * Decodes a CellsColumnMap message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns CellsColumnMap
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): factset.protobuf.stach.v2.table.MetadataLocations.CellsColumnMap;

                                /**
                                 * Verifies a CellsColumnMap message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a CellsColumnMap message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns CellsColumnMap
                                 */
                                public static fromObject(object: { [k: string]: any }): factset.protobuf.stach.v2.table.MetadataLocations.CellsColumnMap;

                                /**
                                 * Creates a plain object from a CellsColumnMap message. Also converts values to other types if specified.
                                 * @param message CellsColumnMap
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: factset.protobuf.stach.v2.table.MetadataLocations.CellsColumnMap, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this CellsColumnMap to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };
                            }

                            /** Properties of a CellsRowMap. */
                            interface ICellsRowMap {

                                /** CellsRowMap rows */
                                rows?: ({ [k: string]: factset.protobuf.stach.v2.table.IListOfMetadata }|null);
                            }

                            /** Represents a CellsRowMap. */
                            class CellsRowMap implements ICellsRowMap {

                                /**
                                 * Constructs a new CellsRowMap.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: factset.protobuf.stach.v2.table.MetadataLocations.ICellsRowMap);

                                /** CellsRowMap rows. */
                                public rows: { [k: string]: factset.protobuf.stach.v2.table.IListOfMetadata };

                                /**
                                 * Creates a new CellsRowMap instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns CellsRowMap instance
                                 */
                                public static create(properties?: factset.protobuf.stach.v2.table.MetadataLocations.ICellsRowMap): factset.protobuf.stach.v2.table.MetadataLocations.CellsRowMap;

                                /**
                                 * Encodes the specified CellsRowMap message. Does not implicitly {@link factset.protobuf.stach.v2.table.MetadataLocations.CellsRowMap.verify|verify} messages.
                                 * @param message CellsRowMap message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: factset.protobuf.stach.v2.table.MetadataLocations.ICellsRowMap, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Encodes the specified CellsRowMap message, length delimited. Does not implicitly {@link factset.protobuf.stach.v2.table.MetadataLocations.CellsRowMap.verify|verify} messages.
                                 * @param message CellsRowMap message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: factset.protobuf.stach.v2.table.MetadataLocations.ICellsRowMap, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Decodes a CellsRowMap message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns CellsRowMap
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): factset.protobuf.stach.v2.table.MetadataLocations.CellsRowMap;

                                /**
                                 * Decodes a CellsRowMap message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns CellsRowMap
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): factset.protobuf.stach.v2.table.MetadataLocations.CellsRowMap;

                                /**
                                 * Verifies a CellsRowMap message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a CellsRowMap message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns CellsRowMap
                                 */
                                public static fromObject(object: { [k: string]: any }): factset.protobuf.stach.v2.table.MetadataLocations.CellsRowMap;

                                /**
                                 * Creates a plain object from a CellsRowMap message. Also converts values to other types if specified.
                                 * @param message CellsRowMap
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: factset.protobuf.stach.v2.table.MetadataLocations.CellsRowMap, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this CellsRowMap to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };
                            }
                        }

                        /** Properties of a Reference. */
                        interface IReference {

                            /** Reference referenceType */
                            referenceType?: (factset.protobuf.stach.v2.table.ReferenceType|null);

                            /** Reference tableId */
                            tableId?: (string|null);

                            /** Reference columnId */
                            columnId?: (string|null);

                            /** Reference rowId */
                            rowId?: (string|null);
                        }

                        /** Represents a Reference. */
                        class Reference implements IReference {

                            /**
                             * Constructs a new Reference.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: factset.protobuf.stach.v2.table.IReference);

                            /** Reference referenceType. */
                            public referenceType: factset.protobuf.stach.v2.table.ReferenceType;

                            /** Reference tableId. */
                            public tableId: string;

                            /** Reference columnId. */
                            public columnId: string;

                            /** Reference rowId. */
                            public rowId: string;

                            /**
                             * Creates a new Reference instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Reference instance
                             */
                            public static create(properties?: factset.protobuf.stach.v2.table.IReference): factset.protobuf.stach.v2.table.Reference;

                            /**
                             * Encodes the specified Reference message. Does not implicitly {@link factset.protobuf.stach.v2.table.Reference.verify|verify} messages.
                             * @param message Reference message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: factset.protobuf.stach.v2.table.IReference, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified Reference message, length delimited. Does not implicitly {@link factset.protobuf.stach.v2.table.Reference.verify|verify} messages.
                             * @param message Reference message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: factset.protobuf.stach.v2.table.IReference, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a Reference message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Reference
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): factset.protobuf.stach.v2.table.Reference;

                            /**
                             * Decodes a Reference message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns Reference
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): factset.protobuf.stach.v2.table.Reference;

                            /**
                             * Verifies a Reference message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a Reference message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns Reference
                             */
                            public static fromObject(object: { [k: string]: any }): factset.protobuf.stach.v2.table.Reference;

                            /**
                             * Creates a plain object from a Reference message. Also converts values to other types if specified.
                             * @param message Reference
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: factset.protobuf.stach.v2.table.Reference, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this Reference to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** ReferenceType enum. */
                        enum ReferenceType {
                            UNKNOWN_REFERENCE_TYPE = 0,
                            TABLE = 1,
                            COLUMN = 2,
                            ROW = 3,
                            CELL = 4
                        }

                        /** Properties of a RowDefinition. */
                        interface IRowDefinition {

                            /** RowDefinition id */
                            id?: (string|null);

                            /** RowDefinition format */
                            format?: (factset.protobuf.stach.v2.table.IDataFormat|null);
                        }

                        /** Represents a RowDefinition. */
                        class RowDefinition implements IRowDefinition {

                            /**
                             * Constructs a new RowDefinition.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: factset.protobuf.stach.v2.table.IRowDefinition);

                            /** RowDefinition id. */
                            public id: string;

                            /** RowDefinition format. */
                            public format?: (factset.protobuf.stach.v2.table.IDataFormat|null);

                            /**
                             * Creates a new RowDefinition instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns RowDefinition instance
                             */
                            public static create(properties?: factset.protobuf.stach.v2.table.IRowDefinition): factset.protobuf.stach.v2.table.RowDefinition;

                            /**
                             * Encodes the specified RowDefinition message. Does not implicitly {@link factset.protobuf.stach.v2.table.RowDefinition.verify|verify} messages.
                             * @param message RowDefinition message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: factset.protobuf.stach.v2.table.IRowDefinition, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified RowDefinition message, length delimited. Does not implicitly {@link factset.protobuf.stach.v2.table.RowDefinition.verify|verify} messages.
                             * @param message RowDefinition message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: factset.protobuf.stach.v2.table.IRowDefinition, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a RowDefinition message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns RowDefinition
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): factset.protobuf.stach.v2.table.RowDefinition;

                            /**
                             * Decodes a RowDefinition message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns RowDefinition
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): factset.protobuf.stach.v2.table.RowDefinition;

                            /**
                             * Verifies a RowDefinition message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a RowDefinition message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns RowDefinition
                             */
                            public static fromObject(object: { [k: string]: any }): factset.protobuf.stach.v2.table.RowDefinition;

                            /**
                             * Creates a plain object from a RowDefinition message. Also converts values to other types if specified.
                             * @param message RowDefinition
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: factset.protobuf.stach.v2.table.RowDefinition, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this RowDefinition to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a Table. */
                        interface ITable {

                            /** Table definition */
                            definition?: (factset.protobuf.stach.v2.table.ITableDefinition|null);

                            /** Table data */
                            data?: (factset.protobuf.stach.v2.table.ITableData|null);
                        }

                        /** Represents a Table. */
                        class Table implements ITable {

                            /**
                             * Constructs a new Table.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: factset.protobuf.stach.v2.table.ITable);

                            /** Table definition. */
                            public definition?: (factset.protobuf.stach.v2.table.ITableDefinition|null);

                            /** Table data. */
                            public data?: (factset.protobuf.stach.v2.table.ITableData|null);

                            /**
                             * Creates a new Table instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Table instance
                             */
                            public static create(properties?: factset.protobuf.stach.v2.table.ITable): factset.protobuf.stach.v2.table.Table;

                            /**
                             * Encodes the specified Table message. Does not implicitly {@link factset.protobuf.stach.v2.table.Table.verify|verify} messages.
                             * @param message Table message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: factset.protobuf.stach.v2.table.ITable, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified Table message, length delimited. Does not implicitly {@link factset.protobuf.stach.v2.table.Table.verify|verify} messages.
                             * @param message Table message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: factset.protobuf.stach.v2.table.ITable, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a Table message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Table
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): factset.protobuf.stach.v2.table.Table;

                            /**
                             * Decodes a Table message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns Table
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): factset.protobuf.stach.v2.table.Table;

                            /**
                             * Verifies a Table message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a Table message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns Table
                             */
                            public static fromObject(object: { [k: string]: any }): factset.protobuf.stach.v2.table.Table;

                            /**
                             * Creates a plain object from a Table message. Also converts values to other types if specified.
                             * @param message Table
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: factset.protobuf.stach.v2.table.Table, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this Table to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a TableData. */
                        interface ITableData {

                            /** TableData rows */
                            rows?: (factset.protobuf.stach.v2.table.IRowDefinition[]|null);

                            /** TableData columns */
                            columns?: ({ [k: string]: factset.protobuf.stach.v2.table.IColumnData }|null);

                            /** TableData metadata */
                            metadata?: (factset.protobuf.stach.v2.table.IMetadataCollection|null);
                        }

                        /** Represents a TableData. */
                        class TableData implements ITableData {

                            /**
                             * Constructs a new TableData.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: factset.protobuf.stach.v2.table.ITableData);

                            /** TableData rows. */
                            public rows: factset.protobuf.stach.v2.table.IRowDefinition[];

                            /** TableData columns. */
                            public columns: { [k: string]: factset.protobuf.stach.v2.table.IColumnData };

                            /** TableData metadata. */
                            public metadata?: (factset.protobuf.stach.v2.table.IMetadataCollection|null);

                            /**
                             * Creates a new TableData instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns TableData instance
                             */
                            public static create(properties?: factset.protobuf.stach.v2.table.ITableData): factset.protobuf.stach.v2.table.TableData;

                            /**
                             * Encodes the specified TableData message. Does not implicitly {@link factset.protobuf.stach.v2.table.TableData.verify|verify} messages.
                             * @param message TableData message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: factset.protobuf.stach.v2.table.ITableData, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified TableData message, length delimited. Does not implicitly {@link factset.protobuf.stach.v2.table.TableData.verify|verify} messages.
                             * @param message TableData message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: factset.protobuf.stach.v2.table.ITableData, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a TableData message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns TableData
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): factset.protobuf.stach.v2.table.TableData;

                            /**
                             * Decodes a TableData message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns TableData
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): factset.protobuf.stach.v2.table.TableData;

                            /**
                             * Verifies a TableData message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a TableData message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns TableData
                             */
                            public static fromObject(object: { [k: string]: any }): factset.protobuf.stach.v2.table.TableData;

                            /**
                             * Creates a plain object from a TableData message. Also converts values to other types if specified.
                             * @param message TableData
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: factset.protobuf.stach.v2.table.TableData, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this TableData to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a TableDefinition. */
                        interface ITableDefinition {

                            /** TableDefinition headerTableId */
                            headerTableId?: (string|null);

                            /** TableDefinition columns */
                            columns?: (factset.protobuf.stach.v2.table.IColumnDefinition[]|null);
                        }

                        /** Represents a TableDefinition. */
                        class TableDefinition implements ITableDefinition {

                            /**
                             * Constructs a new TableDefinition.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: factset.protobuf.stach.v2.table.ITableDefinition);

                            /** TableDefinition headerTableId. */
                            public headerTableId: string;

                            /** TableDefinition columns. */
                            public columns: factset.protobuf.stach.v2.table.IColumnDefinition[];

                            /**
                             * Creates a new TableDefinition instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns TableDefinition instance
                             */
                            public static create(properties?: factset.protobuf.stach.v2.table.ITableDefinition): factset.protobuf.stach.v2.table.TableDefinition;

                            /**
                             * Encodes the specified TableDefinition message. Does not implicitly {@link factset.protobuf.stach.v2.table.TableDefinition.verify|verify} messages.
                             * @param message TableDefinition message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: factset.protobuf.stach.v2.table.ITableDefinition, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified TableDefinition message, length delimited. Does not implicitly {@link factset.protobuf.stach.v2.table.TableDefinition.verify|verify} messages.
                             * @param message TableDefinition message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: factset.protobuf.stach.v2.table.ITableDefinition, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a TableDefinition message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns TableDefinition
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): factset.protobuf.stach.v2.table.TableDefinition;

                            /**
                             * Decodes a TableDefinition message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns TableDefinition
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): factset.protobuf.stach.v2.table.TableDefinition;

                            /**
                             * Verifies a TableDefinition message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a TableDefinition message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns TableDefinition
                             */
                            public static fromObject(object: { [k: string]: any }): factset.protobuf.stach.v2.table.TableDefinition;

                            /**
                             * Creates a plain object from a TableDefinition message. Also converts values to other types if specified.
                             * @param message TableDefinition
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: factset.protobuf.stach.v2.table.TableDefinition, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this TableDefinition to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** VerticalAlignment enum. */
                        enum VerticalAlignment {
                            UNKNOWN_VALIGN = 0,
                            TOP = 1,
                            MIDDLE = 2,
                            BOTTOM = 3
                        }
                    }
                }
            }
        }
    }

    /** Namespace google. */
    namespace google {

        /** Namespace protobuf. */
        namespace protobuf {

            /** Properties of a Struct. */
            interface IStruct {

                /** Struct fields */
                fields?: ({ [k: string]: google.protobuf.IValue }|null);
            }

            /** Represents a Struct. */
            class Struct implements IStruct {

                /**
                 * Constructs a new Struct.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.IStruct);

                /** Struct fields. */
                public fields: { [k: string]: google.protobuf.IValue };

                /**
                 * Creates a new Struct instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Struct instance
                 */
                public static create(properties?: google.protobuf.IStruct): google.protobuf.Struct;

                /**
                 * Encodes the specified Struct message. Does not implicitly {@link google.protobuf.Struct.verify|verify} messages.
                 * @param message Struct message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.IStruct, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Struct message, length delimited. Does not implicitly {@link google.protobuf.Struct.verify|verify} messages.
                 * @param message Struct message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.IStruct, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Struct message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Struct
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Struct;

                /**
                 * Decodes a Struct message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Struct
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Struct;

                /**
                 * Verifies a Struct message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Struct message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Struct
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.Struct;

                /**
                 * Creates a plain object from a Struct message. Also converts values to other types if specified.
                 * @param message Struct
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.Struct, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Struct to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Value. */
            interface IValue {

                /** Value nullValue */
                nullValue?: (google.protobuf.NullValue|null);

                /** Value numberValue */
                numberValue?: (number|null);

                /** Value stringValue */
                stringValue?: (string|null);

                /** Value boolValue */
                boolValue?: (boolean|null);

                /** Value structValue */
                structValue?: (google.protobuf.IStruct|null);

                /** Value listValue */
                listValue?: (google.protobuf.IListValue|null);
            }

            /** Represents a Value. */
            class Value implements IValue {

                /**
                 * Constructs a new Value.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.IValue);

                /** Value nullValue. */
                public nullValue: google.protobuf.NullValue;

                /** Value numberValue. */
                public numberValue: number;

                /** Value stringValue. */
                public stringValue: string;

                /** Value boolValue. */
                public boolValue: boolean;

                /** Value structValue. */
                public structValue?: (google.protobuf.IStruct|null);

                /** Value listValue. */
                public listValue?: (google.protobuf.IListValue|null);

                /** Value kind. */
                public kind?: ("nullValue"|"numberValue"|"stringValue"|"boolValue"|"structValue"|"listValue");

                /**
                 * Creates a new Value instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Value instance
                 */
                public static create(properties?: google.protobuf.IValue): google.protobuf.Value;

                /**
                 * Encodes the specified Value message. Does not implicitly {@link google.protobuf.Value.verify|verify} messages.
                 * @param message Value message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.IValue, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Value message, length delimited. Does not implicitly {@link google.protobuf.Value.verify|verify} messages.
                 * @param message Value message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.IValue, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Value message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Value
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Value;

                /**
                 * Decodes a Value message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Value
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Value;

                /**
                 * Verifies a Value message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Value message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Value
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.Value;

                /**
                 * Creates a plain object from a Value message. Also converts values to other types if specified.
                 * @param message Value
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Value to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** NullValue enum. */
            enum NullValue {
                NULL_VALUE = 0
            }

            /** Properties of a ListValue. */
            interface IListValue {

                /** ListValue values */
                values?: (google.protobuf.IValue[]|null);
            }

            /** Represents a ListValue. */
            class ListValue implements IListValue {

                /**
                 * Constructs a new ListValue.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.IListValue);

                /** ListValue values. */
                public values: google.protobuf.IValue[];

                /**
                 * Creates a new ListValue instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ListValue instance
                 */
                public static create(properties?: google.protobuf.IListValue): google.protobuf.ListValue;

                /**
                 * Encodes the specified ListValue message. Does not implicitly {@link google.protobuf.ListValue.verify|verify} messages.
                 * @param message ListValue message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.IListValue, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ListValue message, length delimited. Does not implicitly {@link google.protobuf.ListValue.verify|verify} messages.
                 * @param message ListValue message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.IListValue, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ListValue message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ListValue
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ListValue;

                /**
                 * Decodes a ListValue message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ListValue
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ListValue;

                /**
                 * Verifies a ListValue message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ListValue message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ListValue
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.ListValue;

                /**
                 * Creates a plain object from a ListValue message. Also converts values to other types if specified.
                 * @param message ListValue
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.ListValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ListValue to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }
    }
}

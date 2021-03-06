USE [ProductConfigurationDB]
GO
/****** Object:  StoredProcedure [dbo].[UpdateTwoTiers]    Script Date: 21/11/2017 3:57:46 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[UpdateTwoTiers]') AND type in (N'P', N'PC'))
DROP PROCEDURE [dbo].[UpdateTwoTiers]
GO
/****** Object:  StoredProcedure [dbo].[UpdateTimeOfUses]    Script Date: 21/11/2017 3:57:46 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[UpdateTimeOfUses]') AND type in (N'P', N'PC'))
DROP PROCEDURE [dbo].[UpdateTimeOfUses]
GO
/****** Object:  StoredProcedure [dbo].[UpdateOfferPriceMaps]    Script Date: 21/11/2017 3:57:46 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[UpdateOfferPriceMaps]') AND type in (N'P', N'PC'))
DROP PROCEDURE [dbo].[UpdateOfferPriceMaps]
GO
/****** Object:  StoredProcedure [dbo].[GetTwoTier]    Script Date: 21/11/2017 3:57:46 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[GetTwoTier]') AND type in (N'P', N'PC'))
DROP PROCEDURE [dbo].[GetTwoTier]
GO
/****** Object:  StoredProcedure [dbo].[GetTimeOfUses]    Script Date: 21/11/2017 3:57:46 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[GetTimeOfUses]') AND type in (N'P', N'PC'))
DROP PROCEDURE [dbo].[GetTimeOfUses]
GO
/****** Object:  StoredProcedure [dbo].[GetTimeOfUseNames]    Script Date: 21/11/2017 3:57:46 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[GetTimeOfUseNames]') AND type in (N'P', N'PC'))
DROP PROCEDURE [dbo].[GetTimeOfUseNames]
GO
/****** Object:  StoredProcedure [dbo].[GetOfferPriceMaps]    Script Date: 21/11/2017 3:57:46 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[GetOfferPriceMaps]') AND type in (N'P', N'PC'))
DROP PROCEDURE [dbo].[GetOfferPriceMaps]
GO
/****** Object:  StoredProcedure [dbo].[GetEffectiveDates]    Script Date: 21/11/2017 3:57:46 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[GetEffectiveDates]') AND type in (N'P', N'PC'))
DROP PROCEDURE [dbo].[GetEffectiveDates]
GO
/****** Object:  Table [dbo].[TwoTiers]    Script Date: 21/11/2017 3:57:46 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[TwoTiers]') AND type in (N'U'))
DROP TABLE [dbo].[TwoTiers]
GO
/****** Object:  Table [dbo].[TimeOfUses]    Script Date: 21/11/2017 3:57:46 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[TimeOfUses]') AND type in (N'U'))
DROP TABLE [dbo].[TimeOfUses]
GO
/****** Object:  Table [dbo].[OfferPriceMapTemp]    Script Date: 21/11/2017 3:57:46 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[OfferPriceMapTemp]') AND type in (N'U'))
DROP TABLE [dbo].[OfferPriceMapTemp]
GO
/****** Object:  Table [dbo].[OfferPriceMaps]    Script Date: 21/11/2017 3:57:46 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[OfferPriceMaps]') AND type in (N'U'))
DROP TABLE [dbo].[OfferPriceMaps]
GO
/****** Object:  UserDefinedTableType [dbo].[TwoTierType]    Script Date: 21/11/2017 3:57:46 PM ******/
IF  EXISTS (SELECT * FROM sys.types st JOIN sys.schemas ss ON st.schema_id = ss.schema_id WHERE st.name = N'TwoTierType' AND ss.name = N'dbo')
DROP TYPE [dbo].[TwoTierType]
GO
/****** Object:  UserDefinedTableType [dbo].[TimeOfUseType]    Script Date: 21/11/2017 3:57:46 PM ******/
IF  EXISTS (SELECT * FROM sys.types st JOIN sys.schemas ss ON st.schema_id = ss.schema_id WHERE st.name = N'TimeOfUseType' AND ss.name = N'dbo')
DROP TYPE [dbo].[TimeOfUseType]
GO
/****** Object:  UserDefinedTableType [dbo].[OfferPriceMapType]    Script Date: 21/11/2017 3:57:46 PM ******/
IF  EXISTS (SELECT * FROM sys.types st JOIN sys.schemas ss ON st.schema_id = ss.schema_id WHERE st.name = N'OfferPriceMapType' AND ss.name = N'dbo')
DROP TYPE [dbo].[OfferPriceMapType]
GO
/****** Object:  UserDefinedTableType [dbo].[OfferPriceMapType]    Script Date: 21/11/2017 3:57:46 PM ******/
IF NOT EXISTS (SELECT * FROM sys.types st JOIN sys.schemas ss ON st.schema_id = ss.schema_id WHERE st.name = N'OfferPriceMapType' AND ss.name = N'dbo')
CREATE TYPE [dbo].[OfferPriceMapType] AS TABLE(
	[EffectiveDate] [date] NULL,
	[Year] [int] NULL,
	[Month] [int] NULL,
	[Duration] [varchar](50) NULL,
	[Value] [decimal](9, 2) NULL,
	[Type] [varchar](50) NULL,
	[TierKind] [varchar](50) NULL,
	[PlanCode] [varchar](50) NULL
)
GO
/****** Object:  UserDefinedTableType [dbo].[TimeOfUseType]    Script Date: 21/11/2017 3:57:46 PM ******/
IF NOT EXISTS (SELECT * FROM sys.types st JOIN sys.schemas ss ON st.schema_id = ss.schema_id WHERE st.name = N'TimeOfUseType' AND ss.name = N'dbo')
CREATE TYPE [dbo].[TimeOfUseType] AS TABLE(
	[Name] [varchar](50) NULL,
	[WeekDay] [varchar](50) NULL,
	[Col1] [varchar](50) NULL,
	[Col2] [varchar](50) NULL,
	[Col3] [varchar](50) NULL,
	[Col4] [varchar](50) NULL,
	[Col5] [varchar](50) NULL,
	[Col6] [varchar](50) NULL,
	[Col7] [varchar](50) NULL,
	[Col8] [varchar](10) NULL,
	[Col9] [varchar](50) NULL,
	[Col10] [varchar](50) NULL,
	[Col11] [varchar](50) NULL,
	[Col12] [varchar](50) NULL,
	[Col13] [varchar](50) NULL,
	[Col14] [varchar](50) NULL,
	[Col15] [varchar](50) NULL,
	[Col16] [varchar](50) NULL,
	[Col17] [varchar](50) NULL,
	[Col18] [varchar](50) NULL,
	[Col19] [varchar](50) NULL,
	[Col20] [varchar](50) NULL,
	[Col21] [varchar](50) NULL,
	[Col22] [varchar](50) NULL,
	[Col23] [varchar](50) NULL,
	[Col24] [varchar](50) NULL,
	[Col25] [varchar](50) NULL,
	[Col26] [varchar](50) NULL,
	[Col27] [varchar](50) NULL,
	[Col28] [varchar](50) NULL,
	[Col29] [varchar](50) NULL,
	[Col30] [varchar](50) NULL,
	[Col31] [varchar](50) NULL,
	[Col32] [varchar](50) NULL,
	[Col33] [varchar](50) NULL,
	[Col34] [varchar](50) NULL,
	[Col35] [varchar](50) NULL,
	[Col36] [varchar](50) NULL,
	[Col37] [varchar](50) NULL,
	[Col38] [varchar](50) NULL,
	[Col39] [varchar](50) NULL,
	[Col40] [varchar](50) NULL,
	[Col41] [varchar](50) NULL,
	[Col42] [varchar](50) NULL,
	[Col43] [varchar](50) NULL,
	[Col44] [varchar](50) NULL,
	[Col45] [varchar](50) NULL,
	[Col46] [varchar](50) NULL,
	[Col47] [varchar](50) NULL,
	[Col48] [varchar](50) NULL
)
GO
/****** Object:  UserDefinedTableType [dbo].[TwoTierType]    Script Date: 21/11/2017 3:57:46 PM ******/
IF NOT EXISTS (SELECT * FROM sys.types st JOIN sys.schemas ss ON st.schema_id = ss.schema_id WHERE st.name = N'TwoTierType' AND ss.name = N'dbo')
CREATE TYPE [dbo].[TwoTierType] AS TABLE(
	[Date] [date] NULL,
	[Duration] [varchar](50) NULL,
	[TierKind] [varchar](50) NULL,
	[Value] [int] NULL,
	[Type] [varchar](50) NULL
)
GO
/****** Object:  Table [dbo].[OfferPriceMaps]    Script Date: 21/11/2017 3:57:46 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[OfferPriceMaps]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[OfferPriceMaps](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[EffectiveDate] [date] NULL,
	[Year] [int] NULL,
	[Month] [int] NULL,
	[Duration] [varchar](50) NULL,
	[Value] [decimal](9, 2) NULL,
	[Type] [varchar](50) NULL,
	[TierKind] [varchar](50) NULL,
	[PlanCode] [varchar](50) NULL,
 CONSTRAINT [PK_AllDay] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[OfferPriceMapTemp]    Script Date: 21/11/2017 3:57:46 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[OfferPriceMapTemp]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[OfferPriceMapTemp](
	[Id] [int] NOT NULL,
	[EffectiveDate] [date] NULL,
	[Month] [int] NULL,
	[Duration] [varchar](50) NULL,
	[Value] [decimal](9, 2) NULL,
	[Type] [varchar](50) NULL
) ON [PRIMARY]
END
GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[TimeOfUses]    Script Date: 21/11/2017 3:57:46 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[TimeOfUses]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[TimeOfUses](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [varchar](50) NULL,
	[WeekDay] [varchar](50) NULL,
	[Col1] [varchar](50) NULL,
	[Col2] [varchar](50) NULL,
	[Col3] [varchar](50) NULL,
	[Col4] [varchar](50) NULL,
	[Col5] [varchar](50) NULL,
	[Col6] [varchar](50) NULL,
	[Col7] [varchar](50) NULL,
	[Col8] [varchar](50) NULL,
	[Col9] [varchar](50) NULL,
	[Col10] [varchar](50) NULL,
	[Col11] [varchar](50) NULL,
	[Col12] [varchar](50) NULL,
	[Col13] [varchar](50) NULL,
	[Col14] [varchar](50) NULL,
	[Col15] [varchar](50) NULL,
	[Col16] [varchar](50) NULL,
	[Col17] [varchar](50) NULL,
	[Col18] [varchar](50) NULL,
	[Col19] [varchar](50) NULL,
	[Col20] [varchar](50) NULL,
	[Col21] [varchar](50) NULL,
	[Col22] [varchar](50) NULL,
	[Col23] [varchar](50) NULL,
	[Col24] [varchar](50) NULL,
	[Col25] [varchar](50) NULL,
	[Col26] [varchar](50) NULL,
	[Col27] [varchar](50) NULL,
	[Col28] [varchar](50) NULL,
	[Col29] [varchar](50) NULL,
	[Col30] [varchar](50) NULL,
	[Col31] [varchar](50) NULL,
	[Col32] [varchar](50) NULL,
	[Col33] [varchar](50) NULL,
	[Col34] [varchar](50) NULL,
	[Col35] [varchar](50) NULL,
	[Col36] [varchar](50) NULL,
	[Col37] [varchar](50) NULL,
	[Col38] [varchar](50) NULL,
	[Col39] [varchar](50) NULL,
	[Col40] [varchar](50) NULL,
	[Col41] [varchar](50) NULL,
	[Col42] [varchar](50) NULL,
	[Col43] [varchar](50) NULL,
	[Col44] [varchar](50) NULL,
	[Col45] [varchar](50) NULL,
	[Col46] [varchar](50) NULL,
	[Col47] [varchar](50) NULL,
	[Col48] [varchar](50) NULL,
 CONSTRAINT [PK_TimeOfUses] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[TwoTiers]    Script Date: 21/11/2017 3:57:46 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[TwoTiers]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[TwoTiers](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Date] [date] NULL,
	[Duration] [varchar](50) NULL,
	[TierKind] [varchar](50) NULL,
	[Value] [int] NULL,
	[Type] [varchar](50) NULL,
 CONSTRAINT [PK_TwoTier] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO
SET ANSI_PADDING OFF
GO
/****** Object:  StoredProcedure [dbo].[GetEffectiveDates]    Script Date: 21/11/2017 3:57:46 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[GetEffectiveDates]') AND type in (N'P', N'PC'))
BEGIN
EXEC dbo.sp_executesql @statement = N'CREATE PROCEDURE [dbo].[GetEffectiveDates] AS' 
END
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
ALTER PROCEDURE [dbo].[GetEffectiveDates] 
	-- Add the parameters for the stored procedure here
	@Type varchar(50),
	@PlanCode varchar(50)
	
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    -- Insert statements for procedure here
	select distinct format(EffectiveDate,'yyyy-MM-dd') as [Date] 
	from [dbo].[OfferPriceMaps] where [Type]=@Type and [PlanCode]=@PlanCode order by [Date] desc
END

GO
/****** Object:  StoredProcedure [dbo].[GetOfferPriceMaps]    Script Date: 21/11/2017 3:57:46 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[GetOfferPriceMaps]') AND type in (N'P', N'PC'))
BEGIN
EXEC dbo.sp_executesql @statement = N'CREATE PROCEDURE [dbo].[GetOfferPriceMaps] AS' 
END
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
ALTER PROCEDURE [dbo].[GetOfferPriceMaps]
	-- Add the parameters for the stored procedure here
	@Type varchar(50),
	@EffectiveDate date,
	@PlanCode varchar(50)
AS
BEGIN 
if (@PlanCode='FXTRFALLDAY' or @PlanCode='DOTPALLDAY' or @PlanCode='DOTALLDAY')
Begin
	SELECT [Year],[Month],[3 mth] as mth3,[6 mth] as mth6,[12 mth] as mth12,[18 mth] as mth18,[24 mth] as mth24
		FROM (
			SELECT 
				[Year],[Month],[Duration],Value 
			FROM OfferPriceMaps where [Type]=@Type and [EffectiveDate]=@EffectiveDate and 
			([PlanCode]='FXTRFALLDAY' or [PlanCode]='DOTPALLDAY' or [PlanCode]='DOTALLDAY')
		) as s
		PIVOT
		(
			SUM(Value)
			FOR [Duration] IN ([3 mth],[6 mth],[12 mth],[18 mth],[24 mth])
		)AS pvt

		order by [Year],[Month]
END
else if (@PlanCode='FXTRF2TIER' or @PlanCode='DOTP2TIER' or @PlanCode='DOT2TIER')
BEGIN
		SELECT [Year],[Month],[3 mthOP] as mth3OP ,[3 mthP] as mth3P,[6 mthOP] as mth6OP ,[6 mthP] as mth6P,
			[12 mthOP] as mth12OP ,[12 mthP] as mth12P,[18 mthOP] as mth18OP ,[18 mthP] as mth18P,
			[24 mthOP] as mth24OP ,[24 mthP] as mth24P
		FROM (
			SELECT 
				[Year],[Month],concat([Duration], [TierKind]) as CustomDuration,Value
			FROM OfferPriceMaps where [Type]=@Type and [EffectiveDate]=@EffectiveDate and
			([PlanCode]='FXTRF2TIER' or [PlanCode]='DOTP2TIER' or [PlanCode]='DOT2TIER')
		) as s
		PIVOT
		(
			SUM(Value)
			FOR CustomDuration IN ([3 mthOP],[3 mthP],[6 mthOP],[6 mthP],[12 mthOP],[12 mthP],[18 mthOP],[18 mthP],[24 mthOP],[24 mthP])
		)AS pvt

		order by [Year],[Month]
END
END

GO
/****** Object:  StoredProcedure [dbo].[GetTimeOfUseNames]    Script Date: 21/11/2017 3:57:46 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[GetTimeOfUseNames]') AND type in (N'P', N'PC'))
BEGIN
EXEC dbo.sp_executesql @statement = N'CREATE PROCEDURE [dbo].[GetTimeOfUseNames] AS' 
END
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
ALTER PROCEDURE [dbo].[GetTimeOfUseNames]
	-- Add the parameters for the stored procedure here
	
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    -- Insert statements for procedure here
	select distinct Name,Max(Id) as Id from [dbo].[TimeOfUses] 
	group by Name
	order by Max(Id) desc
END



GO
/****** Object:  StoredProcedure [dbo].[GetTimeOfUses]    Script Date: 21/11/2017 3:57:46 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[GetTimeOfUses]') AND type in (N'P', N'PC'))
BEGIN
EXEC dbo.sp_executesql @statement = N'CREATE PROCEDURE [dbo].[GetTimeOfUses] AS' 
END
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
ALTER PROCEDURE [dbo].[GetTimeOfUses]

@Name varchar(50)

AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    -- Insert statements for procedure here
	select top(8)* from [dbo].[TimeOfUses] where Name=@Name order by Id
END

GO
/****** Object:  StoredProcedure [dbo].[GetTwoTier]    Script Date: 21/11/2017 3:57:46 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[GetTwoTier]') AND type in (N'P', N'PC'))
BEGIN
EXEC dbo.sp_executesql @statement = N'CREATE PROCEDURE [dbo].[GetTwoTier] AS' 
END
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
ALTER PROCEDURE [dbo].[GetTwoTier]
	-- Add the parameters for the stored procedure here
	@Type varchar(50)
AS
BEGIN


	SELECT format([Date],'yyyy-MM-dd') as [Date_],[6 mthOP] as mth6OP ,[6 mthP] as mth6P,
			[12 mthOP] as mth12OP ,[12 mthP] as mth12P,[18 mthOP] as mth18OP ,[18 mthP] as mth18P,
			[24 mthOP] as mth24OP ,[24 mthP] as mth24P
		FROM (
			SELECT 
				[Date],Value,concat([Duration], [TierKind]) as CustomDuration
			FROM [dbo].[TwoTiers] where [Type]=@Type
		) as s
		PIVOT
		(
			SUM(Value)
			FOR CustomDuration IN ([6 mthOP],[6 mthP],[12 mthOP],[12 mthP],[18 mthOP],[18 mthP],[24 mthOP],[24 mthP])
		)AS pvt

		order by [Date]
END

GO
/****** Object:  StoredProcedure [dbo].[UpdateOfferPriceMaps]    Script Date: 21/11/2017 3:57:46 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[UpdateOfferPriceMaps]') AND type in (N'P', N'PC'))
BEGIN
EXEC dbo.sp_executesql @statement = N'CREATE PROCEDURE [dbo].[UpdateOfferPriceMaps] AS' 
END
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
ALTER PROCEDURE [dbo].[UpdateOfferPriceMaps]
	@tblOfferPriceMapTypes OfferPriceMapType READONLY
AS
BEGIN


	SET NOCOUNT ON;
	MERGE INTO OfferPriceMaps c1
	USING @tblOfferPriceMapTypes c2
	on	c1.[EffectiveDate]=c2.[EffectiveDate]and
		c1.[Year]=c2.[Year]and
		c1.[Month]=c2.[Month]and
		c1.[Duration]=c2.[Duration]and
		c1.[Type]=c2.[Type] and 
		c1.[TierKind]=c2.[TierKind] and
		c1.[PlanCode]=c2.[PlanCode]
	WHEN MATCHED THEN
	UPDATE SET 
			 --  c1.[Date]=c2.[Date],
			 --  c1.[Duration]=c2.[Duration],
			   c1.[Value]=c2.[Value]
			 --  c1.[Type]=c2.[Type]
			  

	WHEN NOT MATCHED THEN
	INSERT VALUES (c2.[EffectiveDate],c2.[Year],c2.[Month],c2.[Duration],c2.[Value],c2.[Type],c2.[TierKind],c2.[PlanCode]);

END

GO
/****** Object:  StoredProcedure [dbo].[UpdateTimeOfUses]    Script Date: 21/11/2017 3:57:46 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[UpdateTimeOfUses]') AND type in (N'P', N'PC'))
BEGIN
EXEC dbo.sp_executesql @statement = N'CREATE PROCEDURE [dbo].[UpdateTimeOfUses] AS' 
END
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
ALTER PROCEDURE [dbo].[UpdateTimeOfUses]
	@tblTimeOfUses TimeOfUseType READONLY
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;
	MERGE INTO TimeOfUses c1
	USING @tblTimeOfUses c2
	on	c1.[Name]=c2.[Name] and
		c1.[WeekDay]=c2.[WeekDay]
		
	WHEN MATCHED THEN
	UPDATE SET 
			   c1.[Col1]=c2.[Col1],
			   c1.[Col2]=c2.[Col2],
			   c1.[Col3]=c2.[Col3],
			   c1.[Col4]=c2.[Col4],
			   c1.[Col5]=c2.[Col5],
			   c1.[Col6]=c2.[Col6],
			   c1.[Col7]=c2.[Col7],
			   c1.[Col8]=c2.[Col8],
			   c1.[Col9]=c2.[Col9],
			   c1.[Col10]=c2.[Col10],
			   c1.[Col11]=c2.[Col11],
			   c1.[Col12]=c2.[Col12],
			   c1.[Col13]=c2.[Col13],
			   c1.[Col14]=c2.[Col14],
			   c1.[Col15]=c2.[Col15],
			   c1.[Col16]=c2.[Col16],
			   c1.[Col17]=c2.[Col17],
			   c1.[Col18]=c2.[Col18],
			   c1.[Col19]=c2.[Col19],
			   c1.[Col20]=c2.[Col20],
			   c1.[Col21]=c2.[Col21],
			   c1.[Col22]=c2.[Col22],
			   c1.[Col23]=c2.[Col23],
			   c1.[Col24]=c2.[Col24],
			   c1.[Col25]=c2.[Col25],
			   c1.[Col26]=c2.[Col26],
			   c1.[Col27]=c2.[Col27],
			   c1.[Col28]=c2.[Col28],
			   c1.[Col29]=c2.[Col29],
			   c1.[Col30]=c2.[Col30],
			   c1.[Col31]=c2.[Col31],
			   c1.[Col32]=c2.[Col32],
			   c1.[Col33]=c2.[Col33],
			   c1.[Col34]=c2.[Col34],
			   c1.[Col35]=c2.[Col35],
			   c1.[Col36]=c2.[Col36],
			   c1.[Col37]=c2.[Col37],
			   c1.[Col38]=c2.[Col38],
			   c1.[Col39]=c2.[Col39],
			   c1.[Col40]=c2.[Col40],
			   c1.[Col41]=c2.[Col41],
			   c1.[Col42]=c2.[Col42],
			   c1.[Col43]=c2.[Col43],
			   c1.[Col44]=c2.[Col44],
			   c1.[Col45]=c2.[Col45],
			   c1.[Col46]=c2.[Col46],
			   c1.[Col47]=c2.[Col47],
			   c1.[Col48]=c2.[Col48]
			
			  

	WHEN NOT MATCHED THEN
	INSERT VALUES (
	c2.[Name],
	c2.[WeekDay],
	c2.[Col1],
	c2.[Col2] ,
	c2.[Col3] ,
	c2.[Col4] ,
	c2.[Col5] ,
	c2.[Col6] ,
	c2.[Col7] ,
	c2.[Col8] ,
	c2.[Col9] ,
	c2.[Col10] ,
	c2.[Col11] ,
	c2.[Col12] ,
	c2.[Col13] ,
	c2.[Col14] ,
	c2.[Col15] ,
	c2.[Col16] ,
	c2.[Col17] ,
	c2.[Col18] ,
	c2.[Col19] ,
	c2.[Col20] ,
	c2.[Col21] ,
	c2.[Col22],
	c2.[Col23] ,
	c2.[Col24] ,
	c2.[Col25] ,
	c2.[Col26] ,
	c2.[Col27] ,
	c2.[Col28] ,
	c2.[Col29] ,
	c2.[Col30] ,
	c2.[Col31] ,
	c2.[Col32] ,
	c2.[Col33] ,
	c2.[Col34] ,
	c2.[Col35] ,
	c2.[Col36] ,
	c2.[Col37] ,
	c2.[Col38] ,
	c2.[Col39] ,
	c2.[Col40] ,
	c2.[Col41] ,
	c2.[Col42] ,
	c2.[Col43] ,
	c2.[Col44] ,
	c2.[Col45] ,
	c2.[Col46] ,
	c2.[Col47] ,
	c2.[Col48] 
	);
   
END

GO
/****** Object:  StoredProcedure [dbo].[UpdateTwoTiers]    Script Date: 21/11/2017 3:57:46 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[UpdateTwoTiers]') AND type in (N'P', N'PC'))
BEGIN
EXEC dbo.sp_executesql @statement = N'CREATE PROCEDURE [dbo].[UpdateTwoTiers] AS' 
END
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
ALTER PROCEDURE [dbo].[UpdateTwoTiers]
	@tblTwoTiers TwoTierType READONLY
AS
BEGIN


	SET NOCOUNT ON;
	MERGE INTO TwoTiers c1
	USING @tblTwoTiers c2
	on	c1.[Date]=c2.[Date]and
		c1.[Duration]=c2.[Duration]and
		c1.[Type]=c2.[Type]and 
		c1.[TierKind]=c2.[TierKind]
	WHEN MATCHED THEN
	UPDATE SET 
			 --  c1.[Date]=c2.[Date],
			 --  c1.[Duration]=c2.[Duration],
			   c1.[Value]=c2.[Value]
			 --  c1.[Type]=c2.[Type]
			  

	WHEN NOT MATCHED THEN
	INSERT VALUES (c2.[Date],c2.[Duration],[TierKind],c2.[Value],c2.[Type]);

END

GO
